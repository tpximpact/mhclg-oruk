import { getAllFilesInFolderWithExtension } from './getAllFilesInFolderWithExtension'
import { getAllFilesInFolder } from './getAllFilesInFolder'
import { filenameToExtension } from './filenameToExtension'

// Mock dependencies
jest.mock('./getAllFilesInFolder')
jest.mock('./filenameToExtension')

describe('getAllFilesInFolderWithExtension', () => {
	beforeEach(() => {
		// Clear all mocks before each test
		jest.clearAllMocks()
	})

	it('should return files with matching extension', () => {
		// Arrange
		const mockFiles = ['file1.txt', 'file2.pdf', 'file3.txt', 'file4.doc']
		const expectedFiles = ['file1.txt', 'file3.txt']

		getAllFilesInFolder.mockReturnValue(mockFiles)
		filenameToExtension.mockImplementation(filename => filename.split('.')[1])

		// Act
		const result = getAllFilesInFolderWithExtension('testFolder', 'txt')

		// Assert
		expect(result).toEqual(expectedFiles)
		expect(getAllFilesInFolder).toHaveBeenCalledWith('testFolder')
		expect(filenameToExtension).toHaveBeenCalledTimes(4)
	})

	it('should return empty array when no files match extension', () => {
		// Arrange
		const mockFiles = ['file1.pdf', 'file2.doc', 'file3.docx']

		getAllFilesInFolder.mockReturnValue(mockFiles)
		filenameToExtension.mockImplementation(filename => filename.split('.')[1])

		// Act
		const result = getAllFilesInFolderWithExtension('testFolder', 'txt')

		// Assert
		expect(result).toEqual([])
		expect(getAllFilesInFolder).toHaveBeenCalledWith('testFolder')
		expect(filenameToExtension).toHaveBeenCalledTimes(3)
	})

	it('should return empty array when folder is empty', () => {
		// Arrange
		getAllFilesInFolder.mockReturnValue([])

		// Act
		const result = getAllFilesInFolderWithExtension('emptyFolder', 'txt')

		// Assert
		expect(result).toEqual([])
		expect(getAllFilesInFolder).toHaveBeenCalledWith('emptyFolder')
		expect(filenameToExtension).not.toHaveBeenCalled()
	})

	it('should handle case-sensitive extensions correctly', () => {
		// Arrange
		const mockFiles = ['file1.TXT', 'file2.txt', 'file3.Txt']

		getAllFilesInFolder.mockReturnValue(mockFiles)
		filenameToExtension.mockImplementation(filename => filename.split('.')[1])

		// Act
		const result = getAllFilesInFolderWithExtension('testFolder', 'txt')

		// Assert
		expect(result).toEqual(['file2.txt'])
		expect(getAllFilesInFolder).toHaveBeenCalledWith('testFolder')
		expect(filenameToExtension).toHaveBeenCalledTimes(3)
	})
})
