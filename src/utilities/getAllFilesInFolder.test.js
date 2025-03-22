import fs from 'fs'
import path from 'path'
import { getAllFilesInFolder } from './getAllFilesInFolder'

// Mock the fs module
jest.mock('fs')

// Mock the path module
jest.mock('path', () => ({
	join: jest.fn()
}))

describe('getAllFilesInFolder', () => {
	beforeEach(() => {
		// Clear all mocks before each test
		jest.clearAllMocks()
		// Reset the implementation of process.cwd()
		process.cwd = jest.fn().mockReturnValue('/mock/root')
	})

	it('should return an array of files from the specified folder', () => {
		// Mock data
		const mockFiles = ['file1.txt', 'file2.txt', 'file3.md']
		const contentFolder = 'content'
		const mockPath = '/mock/root/content'

		// Setup mocks
		path.join.mockReturnValue(mockPath)
		fs.readdirSync.mockReturnValue(mockFiles)

		// Execute the function
		const result = getAllFilesInFolder(contentFolder)

		// Assertions
		expect(result).toEqual(mockFiles)
		expect(path.join).toHaveBeenCalledWith('/mock/root', contentFolder)
		expect(fs.readdirSync).toHaveBeenCalledWith(mockPath)
		expect(fs.readdirSync).toHaveBeenCalledTimes(1)
	})

	it('should throw an error when the folder does not exist', () => {
		const contentFolder = 'nonexistent'
		const mockPath = '/mock/root/nonexistent'

		// Setup mocks
		path.join.mockReturnValue(mockPath)
		fs.readdirSync.mockImplementation(() => {
			throw new Error('Directory not found')
		})

		// Assert that the function throws an error
		expect(() => getAllFilesInFolder(contentFolder)).toThrow('Directory not found')
		expect(path.join).toHaveBeenCalledWith('/mock/root', contentFolder)
		expect(fs.readdirSync).toHaveBeenCalledWith(mockPath)
	})
})
