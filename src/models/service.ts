// Service entity model with zod validation

import { z } from 'zod'
// _id can be a MongoDB ObjectId-like object in tests or a string (Prisma)

// Shared base fields for a Service (user-supplied fields)
export const serviceBaseFieldsSchema = z.object({
	name: z.string().min(1).max(191),
	publisher: z.string().min(1).max(191),
	publisherUrl: z.url().max(191),
	description: z.string().min(1).max(1024),
	comment: z.string().max(1024).optional(),
	developer: z.string().min(1).max(191),
	developerUrl: z.url().max(191),
	service: z.string().min(1).max(191).optional(),
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
	// Accept either an ObjectId-like object (tests) or a string id (Prisma)
	_id: z.union([
		z.string(),
		z.custom((v): v is { toHexString: () => string } =>
			typeof v === 'object' && v !== null && typeof (v as any).toHexString === 'function'
		)
	]),
	schemaVersion: z.object({
		value: z.string().max(191)
	}).optional(),
	statusIsUp: z.object({
		value: z.boolean().optional().default(false)
	}).optional(),
	statusIsValid: z.object({
		value: z.boolean().optional().default(false)
	}).optional(),
	statusOverall: z.object({
		value: z.boolean().optional().default(false)
	}).optional()
})

// Response schema for API (serializes _id as string)
export const serviceResponseSchema = z.object({
	id: z.string(),
	name: z.string(),
	publisher: z.string(),
	publisherUrl: z.string(),
	description: z.string(),
	comment: z.string().optional(),
	service: z.string().optional(),
	developer: z.string(),
	developerUrl: z.string(),
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
	const id = typeof (doc as any)._id === 'string' ? (doc as any)._id : (doc as any)._id.toHexString()

	const res: any = {
		id,
		name: doc.name,
		publisher: doc.publisher,
		publisherUrl: doc.publisherUrl,
		description: doc.description,
		developer: doc.developer,
		developerUrl: doc.developerUrl,
		serviceUrl: doc.serviceUrl,
		contactEmail: doc.contactEmail,
		status: doc.status,
		createdAt: doc.createdAt,
		updatedAt: doc.updatedAt,
		updateLink: `/developers/register/${id}`,
	}

	if (typeof doc.comment !== 'undefined') res.comment = doc.comment
	if (typeof doc.service !== 'undefined') res.service = doc.service
	if (typeof doc.statusNote !== 'undefined') res.statusNote = doc.statusNote
	if (typeof doc.testDate !== 'undefined') res.testDate = doc.testDate
	if (typeof doc.lastTested !== 'undefined') res.lastTested = doc.lastTested
	if (typeof doc.active !== 'undefined') res.active = doc.active
	if (typeof doc.schemaVersion !== 'undefined') res.schemaVersion = doc.schemaVersion?.value
	if (typeof doc.statusIsUp !== 'undefined') res.statusIsUp = Boolean(doc.statusIsUp?.value ?? false)
	if (typeof doc.statusIsValid !== 'undefined') res.statusIsValid = Boolean(doc.statusIsValid?.value ?? false)
	if (typeof doc.statusOverall !== 'undefined') res.statusOverall = Boolean(doc.statusOverall?.value ?? false)

	return res
}
