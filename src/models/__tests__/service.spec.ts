import { ObjectId } from 'mongodb'
import {
  insertServiceSchema,
  serviceDocumentSchema,
  serviceResponseSchema,
  toServiceResponse,
} from '../service'
import { expect, describe, it } from '@jest/globals'

describe('Service Model', () => {
  describe('insertServiceSchema', () => {
    it('should validate valid service data', () => {
      const validData = {
        name: 'Test Service',
        publisher: 'Test Publisher',
        publisherUrl: 'https://test-publisher.com',
        description: 'Test Description',
        developer: 'Test Developer',
        developerUrl: 'https://test-developer.com',
        serviceUrl: 'https://test-service.com',
        contactEmail: 'test@example.com',
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      const result = insertServiceSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })

    it('should reject invalid service data', () => {
      const invalidData = {
        name: '', // Empty name
        publisher: 'Test Publisher',
        publisherUrl: 'not-a-url', // Invalid URL
        description: 'Test Description',
        developer: 'Test Developer',
        developerUrl: 'https://test-developer.com',
        serviceUrl: 'https://test-service.com',
        contactEmail: 'not-an-email', // Invalid email
        status: 'invalid-status', // Invalid status
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      const result = insertServiceSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
      if (!result.success) {
        const issues = result.error.issues
        const paths = issues.map(issue => issue.path.join('.'))
        expect(paths).toContain('name')
        expect(paths).toContain('publisherUrl')
        expect(paths).toContain('contactEmail')
        expect(paths).toContain('status')
      }
    })
  })

  describe('serviceDocumentSchema', () => {
    it('should validate valid document data', () => {
      const validDoc = {
        _id: new ObjectId(),
        name: 'Test Service',
        publisher: 'Test Publisher',
        publisherUrl: 'https://test-publisher.com',
        description: 'Test Description',
        developer: 'Test Developer',
        developerUrl: 'https://test-developer.com',
        serviceUrl: 'https://test-service.com',
        contactEmail: 'test@example.com',
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      const result = serviceDocumentSchema.safeParse(validDoc)
      expect(result.success).toBe(true)
    })

    it('should reject document without _id', () => {
      const invalidDoc = {
        name: 'Test Service',
        publisher: 'Test Publisher',
        publisherUrl: 'https://test-publisher.com',
        description: 'Test Description',
        developer: 'Test Developer',
        developerUrl: 'https://test-developer.com',
        serviceUrl: 'https://test-service.com',
        contactEmail: 'test@example.com',
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date(),
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
        id: new ObjectId().toHexString(),
        name: 'Test Service',
        publisher: 'Test Publisher',
        publisherUrl: 'https://test-publisher.com',
        description: 'Test Description',
        developer: 'Test Developer',
        developerUrl: 'https://test-developer.com',
        serviceUrl: 'https://test-service.com',
        contactEmail: 'test@example.com',
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date(),
        updateLink: '/test-link',
      }

      const result = serviceResponseSchema.safeParse(validResponse)
      expect(result.success).toBe(true)
    })
  })

  describe('toServiceResponse', () => {
    it('should convert document to response format', () => {
      const id = new ObjectId()
      const doc = {
        _id: id,
        name: 'Test Service',
        publisher: 'Test Publisher',
        publisherUrl: 'https://test-publisher.com',
        description: 'Test Description',
        developer: 'Test Developer',
        developerUrl: 'https://test-developer.com',
        serviceUrl: 'https://test-service.com',
        contactEmail: 'test@example.com',
        status: 'pending' as const,
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      const response = toServiceResponse(doc)

      expect(response).toEqual({
        id: id.toHexString(),
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
        updateLink: `/developers/register/${id.toHexString()}`,
      })
    })
  })
})