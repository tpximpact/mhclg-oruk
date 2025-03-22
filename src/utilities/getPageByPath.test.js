import { getPageByPath } from './getPageByPath'
import { getExpandedPageTree } from './getExpandedPageTree'

// Mock the getExpandedPageTree module
jest.mock('./getExpandedPageTree')

describe('getPageByPath', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks()
  })

  test('should return page when path matches', () => {
    // Mock data
    const mockPages = [
      { name: 'home', urlPath: '/' },
      { name: 'about', urlPath: '/about' },
      { name: 'contact', urlPath: '/contact' }
    ]

    // Set up mock implementation
    getExpandedPageTree.mockReturnValue(mockPages)

    // Call the function
    const result = getPageByPath('/about')

    // Assertions
    expect(result).toEqual({ name: 'about', urlPath: '/about' })
    expect(getExpandedPageTree).toHaveBeenCalledTimes(1)
  })

  test('should return undefined when path does not exist', () => {
    // Mock data
    const mockPages = [
      { name: 'home', urlPath: '/' },
      { name: 'about', urlPath: '/about' }
    ]

    // Set up mock implementation
    getExpandedPageTree.mockReturnValue(mockPages)

    // Call the function
    const result = getPageByPath('/non-existent')

    // Assertions
    expect(result).toBeUndefined()
    expect(getExpandedPageTree).toHaveBeenCalledTimes(1)
  })

  test('should handle empty page tree', () => {
    // Mock empty page tree
    getExpandedPageTree.mockReturnValue([])

    // Call the function
    const result = getPageByPath('/any-path')

    // Assertions
    expect(result).toBeUndefined()
    expect(getExpandedPageTree).toHaveBeenCalledTimes(1)
  })

  test('should handle root path', () => {
    // Mock data
    const mockPages = [
      { name: 'home', urlPath: '/' },
      { name: 'about', urlPath: '/about' }
    ]

    // Set up mock implementation
    getExpandedPageTree.mockReturnValue(mockPages)

    // Call the function
    const result = getPageByPath('/')

    // Assertions
    expect(result).toEqual({ name: 'home', urlPath: '/' })
    expect(getExpandedPageTree).toHaveBeenCalledTimes(1)
  })

  test('should handle nested paths', () => {
    // Mock data with nested paths
    const mockPages = [
      { name: 'home', urlPath: '/' },
      { name: 'about', urlPath: '/about' },
      { name: 'team', urlPath: '/about/team' }
    ]

    // Set up mock implementation
    getExpandedPageTree.mockReturnValue(mockPages)

    // Call the function
    const result = getPageByPath('/about/team')

    // Assertions
    expect(result).toEqual({ name: 'team', urlPath: '/about/team' })
    expect(getExpandedPageTree).toHaveBeenCalledTimes(1)
  })

  test('should propagate errors from getExpandedPageTree', () => {
    // Mock getExpandedPageTree to throw an error
    const error = new Error('Failed to get page tree')
    getExpandedPageTree.mockImplementation(() => {
      throw error
    })

    // Verify that the error is propagated
    expect(() => getPageByPath('/any-path')).toThrow('Failed to get page tree')
    expect(getExpandedPageTree).toHaveBeenCalledTimes(1)
  })
}) 