import fs from 'fs'
import { join } from 'path'
import { getSubdirectories } from './getSubdirectories'

// Mock the fs module
jest.mock('fs')

describe('getSubdirectories', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks()
  })

  it('should return an array of subdirectory paths', () => {
    // Mock data
    const mockDirectoryPath = '/test/path'
    const mockContents = ['folder1', 'file1.txt', 'folder2']
    const mockStats = {
      isDirectory: () => true
    }

    // Setup mocks
    fs.readdirSync.mockReturnValue(mockContents)
    fs.statSync.mockReturnValue(mockStats)

    // Execute function
    const result = getSubdirectories(mockDirectoryPath)

    // Assertions
    expect(result).toEqual([
      join(mockDirectoryPath, 'folder1'),
      join(mockDirectoryPath, 'file1.txt'),
      join(mockDirectoryPath, 'folder2')
    ])
    expect(fs.readdirSync).toHaveBeenCalledWith(mockDirectoryPath)
    expect(fs.statSync).toHaveBeenCalledTimes(3)
  })

  it('should only include directories in the result', () => {
    // Mock data
    const mockDirectoryPath = '/test/path'
    const mockContents = ['folder1', 'file1.txt', 'folder2']
    const mockStats = {
      isDirectory: jest.fn()
        .mockReturnValueOnce(true)    // folder1 is a directory
        .mockReturnValueOnce(false)   // file1.txt is not a directory
        .mockReturnValueOnce(true)    // folder2 is a directory
    }

    // Setup mocks
    fs.readdirSync.mockReturnValue(mockContents)
    fs.statSync.mockReturnValue(mockStats)

    // Execute function
    const result = getSubdirectories(mockDirectoryPath)

    // Assertions
    expect(result).toEqual([
      join(mockDirectoryPath, 'folder1'),
      join(mockDirectoryPath, 'folder2')
    ])
    expect(fs.readdirSync).toHaveBeenCalledWith(mockDirectoryPath)
    expect(fs.statSync).toHaveBeenCalledTimes(3)
  })

  it('should handle errors and return an empty array', () => {
    // Mock data
    const mockDirectoryPath = '/invalid/path'
    
    // Setup mock to throw error
    fs.readdirSync.mockImplementation(() => {
      throw new Error('Directory not found')
    })

    // Spy on console.error
    const consoleSpy = jest.spyOn(console, 'error')

    // Execute function
    const result = getSubdirectories(mockDirectoryPath)

    // Assertions
    expect(result).toEqual([])
    expect(consoleSpy).toHaveBeenCalledWith('Error reading directory: Error: Directory not found')
    expect(fs.readdirSync).toHaveBeenCalledWith(mockDirectoryPath)
    
    // Clean up
    consoleSpy.mockRestore()
  })
}) 