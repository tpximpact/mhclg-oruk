// Registration entity model with zod validation

import { z } from 'zod'

// Schema for creating a new registration
export const insertRegistrationSchema = z.object({
  name: z.string().min(1).max(191),
  publisher: z.string().min(1).max(191),
  publisherUrl: z.string().url().max(191),
  description: z.string().min(1).max(1024),
  developer: z.string().min(1).max(191),
  developerUrl: z.string().url().max(191),
  serviceUrl: z.string().url().max(191),
  contactEmail: z.string().email().max(191),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
})

// TypeScript types inferred from schemas
export type InsertRegistration = z.infer<typeof insertRegistrationSchema>

