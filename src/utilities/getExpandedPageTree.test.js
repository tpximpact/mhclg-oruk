import { getExpandedPageTree } from './getExpandedPageTree'
import { expandTree } from './expandTree'
import { getRawPageTree } from './getRawPageTree'

// Mock both dependencies
jest.mock('./expandTree')
jest.mock('./getRawPageTree')

describe('getExpandedPageTree', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks()
  })

  test('should combine getRawPageTree and expandTree correctly', () => {
    // Mock data
    const mockRawTree = [
      {
        name: 'home',
        urlPath: '/',
        childNodes: [
          {
            name: 'about',
            urlPath: 'about'
          }
        ]
      }
    ]

    const mockExpandedTree = [
      {
        name: 'about',
        urlPath: '/about',
        parentNodeName: 'home',
        childNodes: undefined
      },
      {
        name: 'home',
        urlPath: '/',
        childNodes: undefined
      }
    ]

    // Set up mock implementations
    getRawPageTree.mockReturnValue(mockRawTree)
    expandTree.mockReturnValue(mockExpandedTree)

    // Call the function
    const result = getExpandedPageTree()

    // Assertions
    expect(result).toEqual(mockExpandedTree)
    expect(getRawPageTree).toHaveBeenCalledTimes(1)
    expect(getRawPageTree).toHaveBeenCalledWith()
    expect(expandTree).toHaveBeenCalledTimes(1)
    expect(expandTree).toHaveBeenCalledWith(mockRawTree, false)
  })

  test('should handle empty page tree', () => {
    // Mock empty page tree
    getRawPageTree.mockReturnValue([])
    expandTree.mockReturnValue([])

    // Call the function
    const result = getExpandedPageTree()

    // Assertions
    expect(result).toEqual([])
    expect(getRawPageTree).toHaveBeenCalledTimes(1)
    expect(expandTree).toHaveBeenCalledTimes(1)
    expect(expandTree).toHaveBeenCalledWith([], false)
  })

  test('should propagate errors from getRawPageTree', () => {
    // Mock getRawPageTree to throw an error
    const error = new Error('Failed to get page tree')
    getRawPageTree.mockImplementation(() => {
      throw error
    })

    // Verify that the error is propagated
    expect(() => getExpandedPageTree()).toThrow('Failed to get page tree')
    expect(getRawPageTree).toHaveBeenCalledTimes(1)
    expect(expandTree).not.toHaveBeenCalled()
  })

  test('should propagate errors from expandTree', () => {
    // Mock data and error
    const mockRawTree = [{ name: 'test' }]
    const error = new Error('Failed to expand tree')
    
    getRawPageTree.mockReturnValue(mockRawTree)
    expandTree.mockImplementation(() => {
      throw error
    })

    // Verify that the error is propagated
    expect(() => getExpandedPageTree()).toThrow('Failed to expand tree')
    expect(getRawPageTree).toHaveBeenCalledTimes(1)
    expect(expandTree).toHaveBeenCalledTimes(1)
    expect(expandTree).toHaveBeenCalledWith(mockRawTree, false)
  })
}) 