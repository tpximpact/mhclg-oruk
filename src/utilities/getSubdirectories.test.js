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
    const mockDirectoryContents = ['folder1', 'file1.txt', 'folder2']
    const testPath = '/test/path'
    
    // Mock fs.readdirSync to return our test directory contents
    fs.readdirSync.mockReturnValue(mockDirectoryContents)
    
    // Mock fs.statSync to return different stats for files and directories
    fs.statSync.mockImplementation((path) => ({
      isDirectory: () => path.includes('folder')
    }))

    const result = getSubdirectories(testPath)

    // Verify the results
    expect(result).toEqual([
      join(testPath, 'folder1'),
      join(testPath, 'folder2')
    ])
    
    // Verify fs methods were called correctly
    expect(fs.readdirSync).toHaveBeenCalledWith(testPath)
    expect(fs.statSync).toHaveBeenCalledTimes(3)
  })

  it('should return an empty array when no subdirectories exist', () => {
    // Mock data with no directories
    const mockDirectoryContents = ['file1.txt', 'file2.txt']
    const testPath = '/test/path'
    
    fs.readdirSync.mockReturnValue(mockDirectoryContents)
    fs.statSync.mockImplementation(() => ({
      isDirectory: () => false
    }))

    const result = getSubdirectories(testPath)

    expect(result).toEqual([])
    expect(fs.readdirSync).toHaveBeenCalledWith(testPath)
    expect(fs.statSync).toHaveBeenCalledTimes(2)
  })

  it('should handle errors and return an empty array', () => {
    const testPath = '/test/path'
    
    // Mock fs.readdirSync to throw an error
    fs.readdirSync.mockImplementation(() => {
      throw new Error('Permission denied')
    })

    // Mock console.error to avoid cluttering test output
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation()

    const result = getSubdirectories(testPath)

    expect(result).toEqual([])
    expect(consoleSpy).toHaveBeenCalledWith('Error reading directory: Error: Permission denied')
    expect(fs.readdirSync).toHaveBeenCalledWith(testPath)
    expect(fs.statSync).not.toHaveBeenCalled()

    consoleSpy.mockRestore()
  })
}) 