// Service entity model with zod validation

import { z } from 'zod'
import type { ObjectId } from 'mongodb'

// Schema for creating a new service
export const insertServiceSchema = z.object({
  name: z.string().min(1).max(191),
  publisher: z.string().min(1).max(191),
  publisherUrl: z.string().url().max(191),
  description: z.string().min(1).max(1024),
  developer: z.string().min(1).max(191),
  developerUrl: z.string().url().max(191),
  serviceUrl: z.string().url().max(191),
  contactEmail: z.string().email().max(191),
  status: z.enum(['pending', 'approved', 'rejected']),
  statusNote: z.string().max(1024).optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

// Schema for the complete service document (includes _id)
export const serviceDocumentSchema = insertServiceSchema.extend({
  // Avoid importing mongodb runtime in tests (which is ESM). Validate by shape instead.
  _id: z.custom<ObjectId>((v): v is ObjectId => typeof v === 'object' && v !== null && typeof (v as any).toHexString === 'function'),
})

// Response schema for API (serializes _id as string)
export const serviceResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  publisher: z.string(),
  publisherUrl: z.string(),
  description: z.string(),
  developer: z.string(),
  developerUrl: z.string(),
  serviceUrl: z.string(),
  contactEmail: z.string(),
  status: z.enum(['pending', 'approved', 'rejected']),
  statusNote: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  updateLink: z.string(),
})

// TypeScript types inferred from schemas
export type InsertService = z.infer<typeof insertServiceSchema>
export type ServiceDocument = z.infer<typeof serviceDocumentSchema>
export type ServiceResponse = z.infer<typeof serviceResponseSchema>

// Helper to convert a ServiceDocument to ServiceResponse
export function toServiceResponse(doc: ServiceDocument): ServiceResponse {
  return {
    id: doc._id.toHexString(),
    name: doc.name,
    publisher: doc.publisher,
    publisherUrl: doc.publisherUrl,
    description: doc.description,
    developer: doc.developer,
    developerUrl: doc.developerUrl,
    serviceUrl: doc.serviceUrl,
    contactEmail: doc.contactEmail,
    status: doc.status,
    statusNote: doc.statusNote,
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
    updateLink: `/developers/register/${doc._id.toHexString()}`,
  }
}
