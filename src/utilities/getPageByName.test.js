import { getPageByName } from './getPageByName'
import { getExpandedPageTree } from './getExpandedPageTree'

// Mock the getExpandedPageTree module
jest.mock('./getExpandedPageTree')

describe('getPageByName', () => {
	beforeEach(() => {
		// Clear all mocks before each test
		jest.clearAllMocks()
	})

	test('should return page when name matches', () => {
		// Mock data
		const mockPages = [
			{ name: 'home', urlPath: '/' },
			{ name: 'about', urlPath: '/about' },
			{ name: 'contact', urlPath: '/contact' }
		]

		// Set up mock implementation
		getExpandedPageTree.mockReturnValue(mockPages)

		// Call the function
		const result = getPageByName('about')

		// Assertions
		expect(result).toEqual({ name: 'about', urlPath: '/about' })
		expect(getExpandedPageTree).toHaveBeenCalledTimes(1)
	})

	test('should return undefined when page name does not exist', () => {
		// Mock data
		const mockPages = [
			{ name: 'home', urlPath: '/' },
			{ name: 'about', urlPath: '/about' }
		]

		// Set up mock implementation
		getExpandedPageTree.mockReturnValue(mockPages)

		// Call the function
		const result = getPageByName('non-existent')

		// Assertions
		expect(result).toBeUndefined()
		expect(getExpandedPageTree).toHaveBeenCalledTimes(1)
	})

	test('should handle empty page tree', () => {
		// Mock empty page tree
		getExpandedPageTree.mockReturnValue([])

		// Call the function
		const result = getPageByName('any-name')

		// Assertions
		expect(result).toBeUndefined()
		expect(getExpandedPageTree).toHaveBeenCalledTimes(1)
	})

	test('should handle case-sensitive name matching', () => {
		// Mock data
		const mockPages = [
			{ name: 'Home', urlPath: '/' },
			{ name: 'About', urlPath: '/about' }
		]

		// Set up mock implementation
		getExpandedPageTree.mockReturnValue(mockPages)

		// Call the function with different cases
		const result1 = getPageByName('Home')
		const result2 = getPageByName('home')

		// Assertions
		expect(result1).toEqual({ name: 'Home', urlPath: '/' })
		expect(result2).toBeUndefined()
		expect(getExpandedPageTree).toHaveBeenCalledTimes(2)
	})

	test('should propagate errors from getExpandedPageTree', () => {
		// Mock getExpandedPageTree to throw an error
		const error = new Error('Failed to get page tree')
		getExpandedPageTree.mockImplementation(() => {
			throw error
		})

		// Verify that the error is propagated
		expect(() => getPageByName('any-name')).toThrow('Failed to get page tree')
		expect(getExpandedPageTree).toHaveBeenCalledTimes(1)
	})
})
