import type { ObjectId } from 'mongodb'
import type { ServiceDocument } from '@/models/service'
import { ValidationError } from '@/lib/mongodb-errors'

// Mock Prisma service API
let mockPrismaService: any
jest.mock('@/lib/prisma', () => {
	mockPrismaService = {
		create: jest.fn(),
		findUnique: jest.fn(),
		findMany: jest.fn(),
		update: jest.fn(),
		delete: jest.fn()
	}
	return { prisma: { service: mockPrismaService } }
})

// Require after mock setup so imports see the mocked module
const { ServiceRepository } = require('../service-repository')

describe('ServiceRepository', () => {
	let repository: any
	// Lightweight ObjectId-like stub so tests don't import the ESM `mongodb` runtime
	const testId = ({ toHexString: () => '507f1f77bcf86cd799439011' } as unknown) as ObjectId
	const testService: any = {
		_id: testId,
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
		updatedAt: new Date()
	}

	beforeEach(() => {
		repository = new ServiceRepository()
		jest.clearAllMocks()
	})

	describe('create', () => {
		it('should create a new service', async () => {
			 
			const { _id, ...insertData } = testService
			const createdRec = { id: testId.toHexString(), ...insertData }
			mockPrismaService.create.mockResolvedValueOnce(createdRec)

			const result = await repository.create(insertData as any)

			expect(mockPrismaService.create).toHaveBeenCalled()
			expect(result).toEqual(
				expect.objectContaining({
					id: testId.toHexString(),
					name: insertData.name,
					publisher: insertData.publisher
				})
			)
		})

		it('should throw validation error for invalid data', async () => {
			const invalidData = {
				name: '',
				publisher: 'Test'
			} as any

			const createPromise = repository.create(invalidData)
			await expect(createPromise).rejects.toThrow(ValidationError)
		})
	})

	describe('findByPublisher', () => {
		it('should find services by publisher', async () => {
			const rec = { id: testId.toHexString(), ...testService, _id: undefined }
			mockPrismaService.findMany.mockResolvedValueOnce([rec])

			const results = await repository.findByPublisher('Test Publisher')

			expect(mockPrismaService.findMany).toHaveBeenCalledWith({ where: { publisher: 'Test Publisher' } })
			expect(results).toHaveLength(1)
			expect(results[0]).toEqual(
				expect.objectContaining({
					id: testId.toHexString(),
					publisher: 'Test Publisher'
				})
			)
		})
	})

	describe('findByEmail', () => {
		it('should find services by contact email', async () => {
			const rec = { id: testId.toHexString(), ...testService, _id: undefined }
			mockPrismaService.findMany.mockResolvedValueOnce([rec])

			const results = await repository.findByEmail('test@example.com')

			expect(mockPrismaService.findMany).toHaveBeenCalledWith({ where: { contactEmail: 'test@example.com' } })
			expect(results).toHaveLength(1)
			expect(results[0]).toEqual(
				expect.objectContaining({
					id: testId.toHexString(),
					contactEmail: 'test@example.com'
				})
			)
		})
	})

	describe('updateStatus', () => {
		it('should update service status', async () => {
			const updatedRec = { id: testId.toHexString(), ...testService, status: 'approved', statusNote: 'Approved by admin', updatedAt: new Date() }
			mockPrismaService.update.mockResolvedValueOnce(updatedRec)

			const result = await repository.updateStatus(
				testId.toHexString(),
				'approved',
				'Approved by admin'
			)

			expect(mockPrismaService.update).toHaveBeenCalled()
			expect(result).toEqual(
				expect.objectContaining({
					id: testId.toHexString(),
					status: 'approved',
					statusNote: 'Approved by admin'
				})
			)
		})

		it('should return null when service not found', async () => {
			mockPrismaService.update.mockRejectedValueOnce({ code: 'P2025' })

			const result = await repository.updateStatus('000000000000000000000000', 'approved')

			expect(result).toBeNull()
		})
	})

	describe('search', () => {
		it('should search services with query', async () => {
			const rec = { id: testId.toHexString(), ...testService, _id: undefined }
			mockPrismaService.findMany.mockResolvedValueOnce([rec])

			const results = await repository.search('Test')

			expect(mockPrismaService.findMany).toHaveBeenCalled()
			expect(results).toHaveLength(1)
		})
	})
})
