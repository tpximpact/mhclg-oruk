import { getInfoMenuItems } from './getInfoMenuItems'
import { getRawPageTree } from './getRawPageTree'

// Mock the getRawPageTree module
jest.mock('./getRawPageTree')

describe('getInfoMenuItems', () => {
	beforeEach(() => {
		// Clear all mocks before each test
		jest.clearAllMocks()
	})

	test('should return child nodes of info section', () => {
		// Mock data with info section and child nodes
		const mockPageTree = [
			{
				name: 'info',
				label: 'Information',
				childNodes: [
					{ name: 'about', label: 'About' },
					{ name: 'contact', label: 'Contact' }
				]
			},
			{
				name: 'other',
				label: 'Other Section'
			}
		]

		// Set up the mock implementation
		getRawPageTree.mockReturnValue(mockPageTree)

		// Call the function
		const result = getInfoMenuItems()

		// Assertions
		expect(result).toEqual([
			{ name: 'about', label: 'About' },
			{ name: 'contact', label: 'Contact' }
		])
		expect(getRawPageTree).toHaveBeenCalledTimes(1)
	})

	test('should return undefined when info section is not found', () => {
		// Mock data without info section
		const mockPageTree = [
			{
				name: 'other',
				label: 'Other Section',
				childNodes: []
			}
		]

		getRawPageTree.mockReturnValue(mockPageTree)

		const result = getInfoMenuItems()

		expect(result).toBeUndefined()
		expect(getRawPageTree).toHaveBeenCalledTimes(1)
	})

	test('should handle empty page tree', () => {
		getRawPageTree.mockReturnValue([])

		const result = getInfoMenuItems()

		expect(result).toBeUndefined()
		expect(getRawPageTree).toHaveBeenCalledTimes(1)
	})
})
