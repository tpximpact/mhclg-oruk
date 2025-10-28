// Registration entity model with zod validation

import { z } from 'zod'
import { ObjectId } from 'mongodb'

// Schema for creating a new registration
export const insertRegistrationSchema = z.object({
  name: z.string().min(1).max(191),
  publisher: z.string().min(1).max(191),
  publisherUrl: z.string().min(1).max(191),
  description: z.string().min(1).max(1024),
  developer: z.string().min(1).max(191),
  developerUrl: z.string().min(1).max(191),
  serviceUrl: z.string().min(1).max(191),
  contactEmail: z.string().min(1).max(191),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
})

// Schema for the complete registration document (includes _id)
export const registrationDocumentSchema = insertRegistrationSchema.extend({
  _id: z.instanceof(ObjectId),
})

// TypeScript types inferred from schemas
export type InsertRegistration = z.infer<typeof insertRegistrationSchema>
export type RegistrationDocument = z.infer<typeof registrationDocumentSchema>

// Response schema for API (serializes _id as string)
export const registrationResponseSchema = registrationDocumentSchema
  .omit({ _id: true })
  .extend({
    id: z.string(),
    updateLink: z.string().optional(),
  })

export type RegistrationResponse = z.infer<typeof registrationResponseSchema>

// Helper to convert a RegistrationDocument to RegistrationResponse
export function toRegistrationResponse(doc: RegistrationDocument): RegistrationResponse {
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
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
    updateLink: `/developers/register/${doc._id.toHexString()}`,
  }
}
