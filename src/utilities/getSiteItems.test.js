import { getSiteItems } from './getSiteItems'
import { getRawPageTree } from './getRawPageTree'

// Mock the getRawPageTree module
jest.mock('./getRawPageTree')

describe('getSiteItems', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks()
  })

  test('should return the raw page tree', () => {
    // Mock data
    const mockPageTree = [
      {
        name: 'home',
        label: 'Home',
        urlPath: '/',
        childNodes: []
      },
      {
        name: 'about',
        label: 'About',
        urlPath: '/about',
        childNodes: [
          {
            name: 'team',
            label: 'Team',
            urlPath: '/about/team'
          }
        ]
      }
    ]

    // Set up the mock implementation
    getRawPageTree.mockReturnValue(mockPageTree)

    // Call the function
    const result = getSiteItems()

    // Assertions
    expect(result).toEqual(mockPageTree)
    expect(getRawPageTree).toHaveBeenCalledTimes(1)
    expect(getRawPageTree).toHaveBeenCalledWith()
  })

  test('should handle empty page tree', () => {
    // Mock empty page tree
    getRawPageTree.mockReturnValue([])

    // Call the function
    const result = getSiteItems()

    // Assertions
    expect(result).toEqual([])
    expect(getRawPageTree).toHaveBeenCalledTimes(1)
    expect(getRawPageTree).toHaveBeenCalledWith()
  })
}) 