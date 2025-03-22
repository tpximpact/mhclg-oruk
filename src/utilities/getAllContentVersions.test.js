import { getSubdirectories } from './getSubdirectories'
import { getContentVersion } from './getContentVersion'
import { getAllContentVersions } from './getAllContentVersions'

// Mock the dependencies
jest.mock('./getSubdirectories')
jest.mock('./getContentVersion')

describe('getAllContentVersions', () => {
	beforeEach(() => {
		// Clear all mocks before each test
		jest.clearAllMocks()
	})

	it('should return an object with version keys and content values', () => {
		// Mock data
		const mockVersionPaths = ['/path/to/specs/v1.0', '/path/to/specs/v2.0']

		const mockContentV1 = {
			htmlContent: '<div>V1 content</div>',
			rootSpec: { json: '{}', parsed: {} },
			schemata: {}
		}

		const mockContentV2 = {
			htmlContent: '<div>V2 content</div>',
			rootSpec: { json: '{}', parsed: {} },
			schemata: {}
		}

		// Setup mocks
		getSubdirectories.mockReturnValue(mockVersionPaths)
		getContentVersion.mockImplementation(({ specificationFolderPath }) => {
			if (specificationFolderPath === '/path/to/specs/v1.0') {
				return mockContentV1
			}
			return mockContentV2
		})

		// Test parameters
		const params = {
			contentFolder: '/path/to/content',
			specificationFolder: '/path/to/specs'
		}

		// Execute
		const result = getAllContentVersions(params)

		// Verify results
		expect(result).toEqual({
			'v1.0': mockContentV1,
			'v2.0': mockContentV2
		})

		// Verify mock calls
		expect(getSubdirectories).toHaveBeenCalledWith(params.specificationFolder)
		expect(getContentVersion).toHaveBeenCalledTimes(2)
		expect(getContentVersion).toHaveBeenCalledWith({
			contentFolder: params.contentFolder,
			specificationFolderPath: mockVersionPaths[0]
		})
		expect(getContentVersion).toHaveBeenCalledWith({
			contentFolder: params.contentFolder,
			specificationFolderPath: mockVersionPaths[1]
		})
	})

	it('should return an empty object when no versions are found', () => {
		// Setup mocks
		getSubdirectories.mockReturnValue([])

		// Test parameters
		const params = {
			contentFolder: '/path/to/content',
			specificationFolder: '/path/to/specs'
		}

		// Execute
		const result = getAllContentVersions(params)

		// Verify results
		expect(result).toEqual({})

		// Verify mock calls
		expect(getSubdirectories).toHaveBeenCalledWith(params.specificationFolder)
		expect(getContentVersion).not.toHaveBeenCalled()
	})

	it('should handle single version case', () => {
		// Mock data
		const mockVersionPath = ['/path/to/specs/v1.0']
		const mockContent = {
			htmlContent: '<div>V1 content</div>',
			rootSpec: { json: '{}', parsed: {} },
			schemata: {}
		}

		// Setup mocks
		getSubdirectories.mockReturnValue(mockVersionPath)
		getContentVersion.mockReturnValue(mockContent)

		// Test parameters
		const params = {
			contentFolder: '/path/to/content',
			specificationFolder: '/path/to/specs'
		}

		// Execute
		const result = getAllContentVersions(params)

		// Verify results
		expect(result).toEqual({
			'v1.0': mockContent
		})

		// Verify mock calls
		expect(getSubdirectories).toHaveBeenCalledWith(params.specificationFolder)
		expect(getContentVersion).toHaveBeenCalledTimes(1)
		expect(getContentVersion).toHaveBeenCalledWith({
			contentFolder: params.contentFolder,
			specificationFolderPath: mockVersionPath[0]
		})
	})
})
