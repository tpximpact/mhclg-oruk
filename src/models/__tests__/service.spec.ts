import type { ObjectId } from 'mongodb'
// Helper to create a lightweight ObjectId-like object for tests (avoids importing ESM mongodb)
const makeObjectId = (hex = '507f1f77bcf86cd799439011') => ({ toHexString: () => hex }) as unknown as ObjectId
import {
	insertServiceSchema,
	serviceDocumentSchema,
	serviceResponseSchema,
	toServiceResponse
} from '../service'

describe('insertServiceSchema', () => {
	it('should validate valid service data', () => {
		const validData = {
			name: { value: 'Test Service' },
			publisher: { value: 'Test Publisher', url: 'https://test-publisher.com' },
			description: { value: 'Test Description' },
			developer: { value: 'Test Developer', url: 'https://test-developer.com' },
			service: { value: 'Test Service', url: 'https://test-service.com' },
			contactEmail: { value: 'test@example.com' },
			status: 'pending',
			schemaVersion: { value: '3.0' },
			createdAt: new Date(),
			updatedAt: new Date()
		}

		const result = insertServiceSchema.safeParse(validData)
		expect(result.success).toBe(true)
	})

	it('should reject invalid service data', () => {
			const invalidData = {
				name: { value: '' }, // Empty name
				publisher: { value: 'Test Publisher', url: 'not-a-url' }, // Invalid URL
				description: { value: 'Test Description' },
				developer: { value: 'Test Developer', url: 'https://test-developer.com' },
				service: { value: 'Test Service', url: 'https://test-service.com' },
				contactEmail: { value: 'not-an-email' }, // Invalid email
				status: 'invalid-status', // Invalid status
				createdAt: new Date(),
				updatedAt: new Date()
			}

		const result = insertServiceSchema.safeParse(invalidData)
		expect(result.success).toBe(false)
		if (!result.success) {
			const issues = result.error.issues
			const paths = issues.map(issue => issue.path.join('.'))
			expect(paths).toContain('name.value')
			expect(paths).toContain('publisher.url')
			expect(paths).toContain('contactEmail.value')
			expect(paths).toContain('status')
			expect(paths).toContain('schemaVersion')
		}
	})
})

describe('serviceDocumentSchema', () => {
	it('should validate valid document data', () => {
			const validDoc = {
				_id: makeObjectId(),
				name: { value: 'Test Service' },
				publisher: { value: 'Test Publisher', url: 'https://test-publisher.com' },
				description: { value: 'Test Description' },
				developer: { value: 'Test Developer', url: 'https://test-developer.com' },
				service: { value: 'Test Service', url: 'https://test-service.com' },
				contactEmail: { value: 'test@example.com' },
				status: 'pending',
				schemaVersion: { value: '3.0' },
				createdAt: new Date(),
				updatedAt: new Date()
			}

		const result = serviceDocumentSchema.safeParse(validDoc)
		expect(result.success).toBe(true)
	})

	it('should reject document without _id', () => {
			const invalidDoc = {
				name: { value: 'Test Service' },
				publisher: { value: 'Test Publisher', url: 'https://test-publisher.com' },
				description: { value: 'Test Description' },
				developer: { value: 'Test Developer', url: 'https://test-developer.com' },
				service: { value: 'Test Service', url: 'https://test-service.com' },
				contactEmail: { value: 'test@example.com' },
				status: 'pending',
				createdAt: new Date(),
				updatedAt: new Date()
			}

		const result = serviceDocumentSchema.safeParse(invalidDoc)
		expect(result.success).toBe(false)
		if (!result.success) {
			const paths = result.error.issues.map(issue => issue.path.join('.'))
			expect(paths).toContain('_id')
		}
	})
})

describe('serviceResponseSchema', () => {
	it('should validate valid response data', () => {
		const validResponse = {
			id: makeObjectId().toHexString(),
			name: 'Test Service',
			publisher: 'Test Publisher',
			publisherUrl: 'https://test-publisher.com',
			description: 'Test Description',
			developer: 'Test Developer',
			developerUrl: 'https://test-developer.com',
			service: 'Test Service',
			serviceUrl: 'https://test-service.com',
			contactEmail: 'test@example.com',
			status: 'pending',
			createdAt: new Date(),
			updatedAt: new Date(),
			updateLink: '/test-link'
		}

		const result = serviceResponseSchema.safeParse(validResponse)
		expect(result.success).toBe(true)
	})
})

describe('toServiceResponse', () => {
	it('should convert document to response format', () => {
		const id = makeObjectId()
		const doc = {
			_id: id,
			name: { value: 'Test Service' },
			publisher: { value: 'Test Publisher', url: 'https://test-publisher.com' },
			description: { value: 'Test Description' },
			developer: { value: 'Test Developer', url: 'https://test-developer.com' },
			service: { value: 'Test Service', url: 'https://test-service.com' },
			email: { value: 'test@example.com' },
			status: 'pending' as const,
			schemaVersion: { value: '3.0' },
			active: false,
			createdAt: new Date(),
			updatedAt: new Date()
		}

		const response = toServiceResponse(doc)

				expect(response).toEqual(expect.objectContaining({
				id: id.toHexString(),
				name: doc.name.value,
				publisher: doc.publisher.value,
				publisherUrl: doc.publisher.url,
				description: doc.description.value,
				developer: doc.developer.value,
				developerUrl: doc.developer.url,
				serviceUrl: doc.service.url,
				contactEmail: doc.email.value,
				status: doc.status,
				createdAt: doc.createdAt,
				updatedAt: doc.updatedAt,
				updateLink: `/developers/register/${id.toHexString()}`
			}))
	})
})
