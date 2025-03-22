import { getRootLayoutItems } from './getRootLayoutItems'
import { siteStructureWithFullPaths } from './menuing'
import { getRawPageTree } from './getRawPageTree'
import { listDynamicSection } from './dynamicSection'

// Mock all dependencies
jest.mock('./menuing')
jest.mock('./getRawPageTree')
jest.mock('./dynamicSection')

describe('getRootLayoutItems', () => {
	beforeEach(() => {
		// Clear all mocks before each test
		jest.clearAllMocks()
	})

	test('should filter out hidden items and return non-dynamic items unchanged', () => {
		// Mock data
		const mockPageTree = [
			{ name: 'visible', hide: false },
			{ name: 'hidden', hide: true },
			{ name: 'also-visible', hide: false }
		]

		const mockStructuredData = [
			{ name: 'visible', hide: false },
			{ name: 'hidden', hide: true },
			{ name: 'also-visible', hide: false }
		]

		// Set up mock implementations
		getRawPageTree.mockReturnValue(mockPageTree)
		siteStructureWithFullPaths.mockReturnValue(mockStructuredData)

		// Call the function
		const result = getRootLayoutItems()

		// Assertions
		expect(result).toHaveLength(2)
		expect(result).toEqual([
			{ name: 'visible', hide: false },
			{ name: 'also-visible', hide: false }
		])
		expect(getRawPageTree).toHaveBeenCalledTimes(1)
		expect(siteStructureWithFullPaths).toHaveBeenCalledWith(mockPageTree)
	})

	test('should handle dynamic items with less than or equal to 3 child nodes', () => {
		const mockDynamicItems = [{ name: 'news', dynamic: true, urlPath: '/news' }]

		const mockDynamicChildren = [{ title: 'News 1' }, { title: 'News 2' }, { title: 'News 3' }]

		getRawPageTree.mockReturnValue(mockDynamicItems)
		siteStructureWithFullPaths.mockReturnValue(mockDynamicItems)
		listDynamicSection.mockReturnValue(mockDynamicChildren)

		const result = getRootLayoutItems()

		expect(result).toHaveLength(1)
		expect(result[0]).toEqual({
			name: 'news',
			dynamic: true,
			urlPath: '/news',
			dynamicChildNodes: mockDynamicChildren,
			dynamicOverflow: undefined
		})
		expect(listDynamicSection).toHaveBeenCalledWith({
			rootContentFolder: '/news'
		})
	})

	test('should handle dynamic items with more than 3 child nodes', () => {
		const mockDynamicItems = [{ name: 'blog', dynamic: true, urlPath: '/blog' }]

		const mockDynamicChildren = [
			{ title: 'Blog 1' },
			{ title: 'Blog 2' },
			{ title: 'Blog 3' },
			{ title: 'Blog 4' },
			{ title: 'Blog 5' }
		]

		getRawPageTree.mockReturnValue(mockDynamicItems)
		siteStructureWithFullPaths.mockReturnValue(mockDynamicItems)
		listDynamicSection.mockReturnValue(mockDynamicChildren)

		const result = getRootLayoutItems()

		expect(result).toHaveLength(1)
		expect(result[0]).toEqual({
			name: 'blog',
			dynamic: true,
			urlPath: '/blog',
			dynamicChildNodes: mockDynamicChildren.slice(0, 3),
			dynamicOverflow: 2
		})
	})

	test('should handle empty input', () => {
		getRawPageTree.mockReturnValue([])
		siteStructureWithFullPaths.mockReturnValue([])

		const result = getRootLayoutItems()

		expect(result).toEqual([])
		expect(getRawPageTree).toHaveBeenCalledTimes(1)
		expect(siteStructureWithFullPaths).toHaveBeenCalledWith([])
	})

	test('should handle mixed dynamic and non-dynamic items', () => {
		const mockItems = [
			{ name: 'static', hide: false },
			{ name: 'dynamic', dynamic: true, urlPath: '/dynamic' },
			{ name: 'hidden', hide: true }
		]

		const mockDynamicChildren = [{ title: 'Dynamic 1' }, { title: 'Dynamic 2' }]

		getRawPageTree.mockReturnValue(mockItems)
		siteStructureWithFullPaths.mockReturnValue(mockItems)
		listDynamicSection.mockReturnValue(mockDynamicChildren)

		const result = getRootLayoutItems()

		expect(result).toHaveLength(2)
		expect(result).toEqual([
			{ name: 'static', hide: false },
			{
				name: 'dynamic',
				dynamic: true,
				urlPath: '/dynamic',
				dynamicChildNodes: mockDynamicChildren,
				dynamicOverflow: undefined
			}
		])
	})
})
