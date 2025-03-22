import { getNamedSiteItem } from './getNamedSiteItem'
import { flattenSite } from './flattenSite'

// Mock the flattenSite module
jest.mock('./flattenSite')

describe('getNamedSiteItem', () => {
	beforeEach(() => {
		// Clear all mocks before each test
		jest.clearAllMocks()
	})

	test('should return the correct site item when it exists', () => {
		const mockFlattenedSite = [
			{
				name: 'home',
				label: 'Home',
				urlPath: 'home',
				contentPath: '/home'
			},
			{
				name: 'about',
				label: 'About',
				urlPath: 'about',
				contentPath: '/about'
			}
		]

		flattenSite.mockReturnValue(mockFlattenedSite)

		const result = getNamedSiteItem('about')

		expect(result).toEqual({
			name: 'about',
			label: 'About',
			urlPath: 'about',
			contentPath: '/about'
		})
		expect(flattenSite).toHaveBeenCalledTimes(1)
	})

	test('should return undefined when site item does not exist', () => {
		const mockFlattenedSite = [
			{
				name: 'home',
				label: 'Home',
				urlPath: 'home',
				contentPath: '/home'
			}
		]

		flattenSite.mockReturnValue(mockFlattenedSite)

		const result = getNamedSiteItem('non-existent')

		expect(result).toBeUndefined()
		expect(flattenSite).toHaveBeenCalledTimes(1)
	})

	test('should handle items with childNodes', () => {
		const mockFlattenedSite = [
			{
				name: 'parent',
				label: 'Parent',
				urlPath: 'parent',
				contentPath: '/parent',
				childNodes: ['child1', 'child2']
			}
		]

		flattenSite.mockReturnValue(mockFlattenedSite)

		const result = getNamedSiteItem('parent')

		expect(result).toEqual({
			name: 'parent',
			label: 'Parent',
			urlPath: 'parent',
			contentPath: '/parent',
			childNodes: ['child1', 'child2']
		})
	})

	test('should handle empty flattened site', () => {
		flattenSite.mockReturnValue([])

		const result = getNamedSiteItem('any-name')

		expect(result).toBeUndefined()
		expect(flattenSite).toHaveBeenCalledTimes(1)
	})

	test('should return first matching item if multiple items have same name', () => {
		const mockFlattenedSite = [
			{
				name: 'duplicate',
				label: 'First',
				urlPath: 'first'
			},
			{
				name: 'duplicate',
				label: 'Second',
				urlPath: 'second'
			}
		]

		flattenSite.mockReturnValue(mockFlattenedSite)

		const result = getNamedSiteItem('duplicate')

		expect(result).toEqual({
			name: 'duplicate',
			label: 'First',
			urlPath: 'first'
		})
	})
})
