/*const fs = require('fs').promises;
const path = require('path');
const forEachFile = require('./path-to-your-function'); 

// Mock the fs methods used in the function
jest.mock('fs', () => ({
  promises: {
    stat: jest.fn(),
    readdir: jest.fn(),
  },
}));

describe('forEachFile', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it('should process files with the correct extension', async () => {
    const mockFiles = ['file1.txt', 'file2.js', 'file3.txt'];
    const mockDir = './mockDir';
    
    // Mock the fs.readdir to return the mock files
    fs.readdir.mockResolvedValue(mockFiles);
    // Mock fs.stat to simulate file and directory types
    fs.stat.mockImplementation((filePath) => {
      if (filePath === mockDir) {
        return Promise.resolve({ isDirectory: () => true });
      }
      if (filePath.endsWith('.txt')) {
        return Promise.resolve({ isFile: () => true });
      }
      return Promise.resolve({ isFile: () => true });
    });

    const fn = jest.fn();

    await forEachFile(mockDir, '.txt', fn);

    // Verify that the function is called only for the files with the correct extension
    expect(fn).toHaveBeenCalledWith(path.join(mockDir, 'file1.txt'));
    expect(fn).toHaveBeenCalledWith(path.join(mockDir, 'file3.txt'));
    expect(fn).not.toHaveBeenCalledWith(path.join(mockDir, 'file2.js'));
  });

  it('should handle directories and recursively process subdirectories', async () => {
    const mockDir = './mockDir';
    const mockSubDir = './mockDir/subDir';
    const mockFiles = ['file1.txt'];
    const mockSubDirFiles = ['file2.txt'];

    // Mock fs.readdir to return files in directories
    fs.readdir.mockResolvedValueOnce(mockFiles).mockResolvedValueOnce(mockSubDirFiles);

    // Mock fs.stat for files and directories
    fs.stat.mockImplementation((filePath) => {
      if (filePath === mockDir || filePath === mockSubDir) {
        return Promise.resolve({ isDirectory: () => true });
      }
      if (filePath.endsWith('.txt')) {
        return Pr
*/
