import fs from 'fs'
import { join } from 'path'
import { readFile } from './readFile'
import { getPath } from './getPath'

// Mock the fs and getPath modules
jest.mock('fs')
jest.mock('./getPath')

describe('readFile', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks()
  })

  it('should read a file with default slug', () => {
    // Setup mocks
    const mockContent = 'test content'
    const mockPath = '/mock/path'
    getPath.mockReturnValue(mockPath)
    fs.readFileSync.mockReturnValue(mockContent)

    // Call the function
    const result = readFile({ folder: 'test-folder' })

    // Assertions
    expect(getPath).toHaveBeenCalledWith('test-folder')
    expect(fs.readFileSync).toHaveBeenCalledWith(
      join(mockPath, 'index.md'),
      'utf8'
    )
    expect(result).toBe(mockContent)
  })

  it('should read a file with custom slug', () => {
    // Setup mocks
    const mockContent = 'custom content'
    const mockPath = '/mock/path'
    getPath.mockReturnValue(mockPath)
    fs.readFileSync.mockReturnValue(mockContent)

    // Call the function
    const result = readFile({ slug: 'custom-page', folder: 'test-folder' })

    // Assertions
    expect(getPath).toHaveBeenCalledWith('test-folder')
    expect(fs.readFileSync).toHaveBeenCalledWith(
      join(mockPath, 'custom-page.md'),
      'utf8'
    )
    expect(result).toBe(mockContent)
  })

  it('should throw an error if file reading fails', () => {
    // Setup mocks
    const mockError = new Error('File not found')
    getPath.mockReturnValue('/mock/path')
    fs.readFileSync.mockImplementation(() => {
      throw mockError
    })

    // Assert that the function throws
    expect(() => {
      readFile({ folder: 'test-folder' })
    }).toThrow('File not found')
  })
}) 