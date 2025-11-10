// Service entity model with zod validation

import { z } from 'zod'
import type { ObjectId } from 'mongodb'

// Shared base fields for a Service (user-supplied fields)
export const serviceBaseFieldsSchema = z.object({
	name: z.string().min(1).max(191),
	publisher: z.string().min(1).max(191),
	publisherUrl: z.url().max(191),
	description: z.string().min(1).max(1024),
	developer: z.string().min(1).max(191),
	developerUrl: z.url().max(191),
	service: z.string().min(1).max(191),
	serviceUrl: z.url().max(191),
	contactEmail: z.email().max(191),
	testDate: z.date().optional(),
	lastTested: z.date().optional(),
	active: z.boolean().optional().default(false)
})

// Narrow schema for client/server input (form + action)
export const serviceInputSchema = serviceBaseFieldsSchema

// Schema for inserting a new service into the DB (includes server-managed fields)
export const insertServiceSchema = serviceBaseFieldsSchema.extend({
	status: z.enum(['pending', 'approved', 'rejected']),
	statusNote: z.string().max(1024).optional(),
	createdAt: z.date(),
	updatedAt: z.date()
})

// Schema for the complete service document (includes _id)
export const serviceDocumentSchema = insertServiceSchema.extend({
	// Avoid importing mongodb runtime in tests (which is ESM). Validate by shape instead.
	_id: z.custom<ObjectId>(
		(v): v is ObjectId =>
			typeof v === 'object' && v !== null && typeof (v as any).toHexString === 'function'
	),
	schemaVersion: z.object({
		value: z.string().max(191)
	}),
	statusIsUp: z.object({
		value: z.boolean().optional().default(false)
	}),
	statusIsValid: z.object({
		value: z.boolean().optional().default(false)
	}),
	statusOverall: z.object({
		value: z.boolean().optional().default(false)
	})
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
	service: z.string(),
	serviceUrl: z.string(),
	contactEmail: z.string(),
	status: z.enum(['pending', 'approved', 'rejected']),
	statusNote: z.string().optional(),
	statusOverall: z.boolean().optional().default(false),
	createdAt: z.date(),
	testDate: z.date().optional(),
	lastTested: z.date().optional(),
	updatedAt: z.date(),
	updateLink: z.string(),
	active: z.boolean().optional().default(false),
	schemaVersion: z.string().optional(),
	statusIsUp: z.boolean().optional().default(false),
	statusIsValid: z.boolean().optional().default(false)
})

// TypeScript types inferred from schemas
export type InsertService = z.infer<typeof insertServiceSchema>
export type ServiceInput = z.infer<typeof serviceInputSchema>
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
		service: doc.service,
		serviceUrl: doc.serviceUrl,
		contactEmail: doc.contactEmail,
		status: doc.status,
		statusNote: doc.statusNote,
		statusOverall: Boolean(doc.statusOverall.value),
		createdAt: doc.createdAt,
		updatedAt: doc.updatedAt,
		testDate: doc.testDate,
		lastTested: doc.lastTested,
		updateLink: `/developers/register/${doc._id.toHexString()}`,
		active: doc.active ?? false,
		schemaVersion: doc.schemaVersion.value,
		statusIsUp: Boolean(doc.statusIsUp.value),
		statusIsValid: Boolean(doc.statusIsValid.value)
	}
}
