// Repository implementation for Service entity

import { ObjectId } from 'mongodb'
import { BaseRepository } from '@/lib/base-repository'
import {
  ServiceDocument,
  ServiceResponse,
  InsertService,
  insertServiceSchema,
  serviceResponseSchema,
  toServiceResponse,
} from '@/models/service'

export class ServiceRepository extends BaseRepository<
  ServiceDocument,
  ServiceResponse,
  InsertService
> {
  protected readonly collectionName = 'services'
  protected readonly responseSchema = serviceResponseSchema
  protected readonly insertSchema = insertServiceSchema
  protected readonly updateSchema = insertServiceSchema.partial()

  override async create(data: InsertService): Promise<ServiceResponse> {
    const now = new Date()
    return super.create({
      ...data,
      status: 'pending',
      createdAt: now,
      updatedAt: now,
    })
  }

  protected toResponse(doc: ServiceDocument): ServiceResponse {
    return toServiceResponse(doc)
  }

  // Custom methods for Registration entity
  async findByPublisher(publisher: string): Promise<ServiceResponse[]> {
    return this.find({ publisher })
  }

  async findByEmail(email: string): Promise<ServiceResponse[]> {
    return this.find({ contactEmail: email })
  }

  async updateStatus(
    id: string | ObjectId,
    status: 'pending' | 'approved' | 'rejected',
    note?: string
  ): Promise<ServiceResponse | null> {
    return this.update(id, {
      status,
      statusNote: note,
      updatedAt: new Date(),
    })
  }

  // Example of using query builder
  async search(query: string): Promise<ServiceResponse[]> {
    const filter = {
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
        { publisher: { $regex: query, $options: 'i' } },
      ],
    }
    return this.find(filter)
  }
}