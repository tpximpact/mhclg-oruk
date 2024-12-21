import { statContentFile } from './statContentFile'
import fs from 'fs'
import { join } from 'path'
import { CONTENT_ROOT } from './constants'

jest.mock('fs')
jest.mock('path', () => ({
	join: jest.fn()
}))

describe('statContentFile', () => {
	const mockContentPath = 'mockPath'
	const mockFullPath = join(CONTENT_ROOT, mockContentPath)
	const mockStats = { isFile: () => true }

	beforeEach(() => {
		fs.statSync.mockClear()
		join.mockReturnValue(mockFullPath)
	})

	it('should return file stats if the file exists', () => {
		fs.statSync.mockReturnValue(mockStats)
		const result = statContentFile(mockContentPath)
		expect(result).toBe(mockStats)
		expect(join).toHaveBeenCalledWith(CONTENT_ROOT, mockContentPath)
		expect(fs.statSync).toHaveBeenCalledWith(mockFullPath)
	})

	it('should return null and log an error if the file does not exist', () => {
		const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
		const mockError = new Error('File not found')
		fs.statSync.mockImplementation(() => { throw mockError })

		const result = statContentFile(mockContentPath)
		expect(result).toBeNull()
		expect(consoleErrorSpy).toHaveBeenCalledWith(mockError)
		expect(join).toHaveBeenCalledWith(CONTENT_ROOT, mockContentPath)
		expect(fs.statSync).toHaveBeenCalledWith(mockFullPath)

		consoleErrorSpy.mockRestore()
	})
})
