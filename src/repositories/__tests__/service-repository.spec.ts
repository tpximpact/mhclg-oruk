import type { Collection, ObjectId } from 'mongodb'
import { ServiceRepository } from '../service-repository'
import { ServiceDocument } from '@/models/service'
import { ValidationError } from '@/lib/mongodb-errors'

let mockCollection: jest.Mocked<Collection>

jest.mock('@/lib/mongodb', () => {
	const getMongoClient = jest.fn(() => Promise.resolve({
		db: () => ({
			collection: () => mockCollection
		})
	} as any))

	const getCollection = jest.fn((_name: string) => Promise.resolve(mockCollection))

	return { getMongoClient, getCollection }
})

describe('ServiceRepository', () => {
	let repository: ServiceRepository
	// Lightweight ObjectId-like stub so tests don't import the ESM `mongodb` runtime
	const testId = ({ toHexString: () => '507f1f77bcf86cd799439011' } as unknown) as ObjectId
	const testService: ServiceDocument = {
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
		mockCollection = {
			insertOne: jest.fn(),
			findOne: jest.fn(),
			find: jest.fn().mockReturnValue({
				toArray: jest.fn()
			}),
			updateOne: jest.fn(),
			deleteOne: jest.fn(),
			findOneAndUpdate: jest.fn()
		} as unknown as jest.Mocked<Collection>
		repository = new ServiceRepository()
		jest.clearAllMocks()
	})

	describe('create', () => {
		it('should create a new service', async () => {
			// eslint-disable-next-line no-unused-vars
			const { _id, ...insertData } = testService
			mockCollection.insertOne.mockResolvedValueOnce({ acknowledged: true, insertedId: testId })
			mockCollection.findOne.mockResolvedValueOnce(testService)

			const result = await repository.create(insertData)

			expect(mockCollection.insertOne).toHaveBeenCalled()
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
			const mockCursor = {
				toArray: jest.fn().mockResolvedValue([testService] as never)
			}
			mockCollection.find.mockReturnValueOnce(mockCursor as any)

			const results = await repository.findByPublisher('Test Publisher')

			expect(mockCollection.find).toHaveBeenCalledWith({ publisher: 'Test Publisher' })
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
			const mockCursor = {
				toArray: jest.fn().mockResolvedValue([testService] as never)
			}
			mockCollection.find.mockReturnValueOnce(mockCursor as any)

			const results = await repository.findByEmail('test@example.com')

			expect(mockCollection.find).toHaveBeenCalledWith({ contactEmail: 'test@example.com' })
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
			const updatedService = {
				...testService,
				status: 'approved',
				statusNote: 'Approved by admin',
				updatedAt: expect.any(Date)
			}
			mockCollection.findOneAndUpdate.mockResolvedValueOnce(updatedService)

			const result = await repository.updateStatus(
				testId.toHexString(),
				'approved',
				'Approved by admin'
			)

			expect(mockCollection.findOneAndUpdate).toHaveBeenCalled()
			expect(result).toEqual(
				expect.objectContaining({
					id: testId.toHexString(),
					status: 'approved',
					statusNote: 'Approved by admin'
				})
			)
		})

		it('should return null when service not found', async () => {
			mockCollection.findOneAndUpdate.mockResolvedValueOnce(null)

			const result = await repository.updateStatus('000000000000000000000000', 'approved')

			expect(result).toBeNull()
		})
	})

	describe('search', () => {
		it('should search services with query', async () => {
			const mockCursor = {
				toArray: jest.fn().mockResolvedValue([testService] as never)
			}
			mockCollection.find.mockReturnValueOnce(mockCursor as any)

			const results = await repository.search('Test')

			expect(mockCollection.find).toHaveBeenCalledWith({
				$or: [
					{ name: { $regex: 'Test', $options: 'i' } },
					{ description: { $regex: 'Test', $options: 'i' } },
					{ publisher: { $regex: 'Test', $options: 'i' } }
				]
			})
			expect(results).toHaveLength(1)
		})
	})
})
