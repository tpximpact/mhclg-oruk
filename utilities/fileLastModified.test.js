import { fileLastModified } from './fileLastModified'
import { statContentFile } from './statContentFile'

jest.mock('./statContentFile')

describe('fileLastModified', () => {
	it('should return formatted date when file stats are available', () => {
		const mockStats = { mtime: new Date('2023-01-01T00:00:00Z') }
		statContentFile.mockReturnValue(mockStats)
		const result = fileLastModified('path/to/file')
		expect(result).toBe('01/01/2023')
	})
})
