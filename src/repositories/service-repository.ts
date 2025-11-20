// Repository implementation for Service entity

import { prisma } from '@/lib/prisma'
import {
  ServiceResponse,
  insertServiceSchema,
  ServiceInput,
} from '@/models/service'
import { ValidationError } from '@/lib/mongodb-errors'
import { z } from 'zod'

function toResponseFromPrisma(record: any): ServiceResponse {
  const fieldValue = (v: any) => {
    if (v == null) return undefined
    if (typeof v === 'string') return v
    if (typeof v === 'object' && 'value' in v) return String((v as any).value)
    // If stored as { value: { ... } } or other nested shape, stringify fallback
    try {
      return String(v)
    } catch {
      return undefined
    }
  }

  return {
    id: record.id,
    name: fieldValue(record.name) || fieldValue(record.title) || '',
    publisher: fieldValue(record.publisher) || '',
    publisherUrl: record.publisherUrl,
    description: fieldValue(record.description) || '',
    comment: fieldValue(record.comment) ?? undefined,
    developer: fieldValue(record.developer) || '',
    developerUrl: record.developerUrl,
    service: fieldValue(record.service),
    serviceUrl: record.serviceUrl,
    contactEmail: record.contactEmail,
    status: record.status,
    statusNote: record.statusNote ?? undefined,
    statusOverall: Boolean(record.statusOverall ?? false),
    createdAt: record.createdAt,
    testDate: record.testDate ?? undefined,
    lastTested: record.lastTested ?? undefined,
    updatedAt: record.updatedAt,
    updateLink: `/developers/register/${record.id}`,
    active: Boolean(record.active ?? false),
    schemaVersion: record.schemaVersion ?? undefined,
    statusIsUp: Boolean(record.statusIsUp ?? false),
    statusIsValid: Boolean(record.statusIsValid ?? false),
  }
}

function buildPrismaWhere(filter: any) {
  if (!filter || typeof filter !== 'object') return undefined
  const where: any = {}
  for (const [k, v] of Object.entries(filter)) {
    if (typeof v === 'undefined') continue
    // For primitive equality, use `{ equals: value }` which is broadly supported
    if (v === null || ['string', 'number', 'boolean'].includes(typeof v)) {
      where[k] = { equals: v }
      continue
    }
    // If value is an object (e.g., nested filter), pass through but remove undefined fields
    if (typeof v === 'object') {
      const obj: any = {}
      for (const [kk, vv] of Object.entries(v as any)) {
        if (typeof vv !== 'undefined') obj[kk] = vv
      }
      where[k] = obj
      continue
    }
  }
  return where
}

export class ServiceRepository {
  async findById(id: string): Promise<ServiceResponse | null> {
    const rec = await prisma.service.findUnique({ where: { id } })
    return rec ? toResponseFromPrisma(rec) : null
  }

  async findByPublisher(publisher: string): Promise<ServiceResponse[]> {
    const where = buildPrismaWhere({ publisher })
    const rows = where ? await prisma.service.findMany({ where }) : await prisma.service.findMany()
    return rows.map(toResponseFromPrisma)
  }

  async findByEmail(email: string): Promise<ServiceResponse[]> {
    const where = buildPrismaWhere({ contactEmail: email })
    const rows = where ? await prisma.service.findMany({ where }) : await prisma.service.findMany()
    return rows.map(toResponseFromPrisma)
  }

  async find(filter: any = {}): Promise<ServiceResponse[]> {
    // Normalize filter into a Prisma-compatible `where` object
    const where = buildPrismaWhere(filter)
    const rows = where ? await prisma.service.findMany({ where }) : await prisma.service.findMany()
    return rows.map(toResponseFromPrisma)
  }

  async search(query: string): Promise<ServiceResponse[]> {
    const rows = await prisma.service.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { description: { contains: query } },
          { publisher: { contains: query } },
        ],
      },
    })
    return rows.map(toResponseFromPrisma)
  }

  async create(data: ServiceInput): Promise<ServiceResponse> {
    const now = new Date()
    // validate and map zod errors to ValidationError for compatibility
    try {
      insertServiceSchema.parse({ ...data, status: 'pending', createdAt: now, updatedAt: now })
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: Record<string, string[]> = {}
        error.issues.forEach(issue => {
          const path = issue.path.join('.') || '_'
          errors[path] = errors[path] || []
          errors[path].push(issue.message)
        })
        throw new ValidationError('Validation failed', errors)
      }
      throw error
    }

    const rec = await prisma.service.create({
      // Cast to any because `ServiceInput` may have optional fields while the
      // Prisma generated types require certain fields to be present.
      data: {
        ...data,
        status: 'pending',
        createdAt: now,
        updatedAt: now,
      } as any,
    })

    return toResponseFromPrisma(rec)
  }

  async updateStatus(
    id: string,
    status: 'pending' | 'approved' | 'rejected',
    note?: string
  ): Promise<ServiceResponse | null> {
    try {
      const rec = await prisma.service.update({
        where: { id },
        data: { status, statusNote: note, updatedAt: new Date() },
      })
      return toResponseFromPrisma(rec)
    } catch (e: any) {
      // If not found, Prisma throws; map to null
      if (e?.code === 'P2025') return null
      throw e
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      await prisma.service.delete({ where: { id } })
      return true
    } catch (e: any) {
      if (e?.code === 'P2025') return false
      throw e
    }
  }
}