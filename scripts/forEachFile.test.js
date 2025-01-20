const fs = require('fs').promises;
const path = require('path');
const forEachFile = require('./forEachFile');

describe('forEachFile', () => {
  beforeEach(async () => {
    // Create test directory
    await fs.mkdir('test-dir', { recursive: true });
  });

  afterEach(async () => {
    // Remove test directory
    await fs.rm('test-dir', { recursive: true });
  });

  it('calls callback for each file with matching extension', async () => {
    // Create test files
    await Promise.all([
      fs.writeFile('test-dir/file1.js', 'content'),
      fs.writeFile('test-dir/file2.txt', 'content'),
      fs.writeFile('test-dir/file3.js', 'content'),
    ]);

    const callbackMock = jest.fn();
    await forEachFile('test-dir', '.js', callbackMock);

    expect(callbackMock).toHaveBeenCalledTimes(2);
    expect(callbackMock).toHaveBeenCalledWith('test-dir/file1.js');
    expect(callbackMock).toHaveBeenCalledWith('test-dir/file3.js');
  });

  it('recursively calls callback for files in subdirectories', async () => {
    // Create test directory structure
    await fs.mkdir('test-dir/subdir', { recursive: true });
    await Promise.all([
      fs.writeFile('test-dir/file1.js', 'content'),
      fs.writeFile('test-dir/subdir/file2.js', 'content'),
      fs.writeFile('test-dir/subdir/file3.txt', 'content'),
    ]);

    const callbackMock = jest.fn();
    await forEachFile('test-dir', '.js', callbackMock);

    expect(callbackMock).toHaveBeenCalledTimes(2);
    expect(callbackMock).toHaveBeenCalledWith('test-dir/file1.js');
    expect(callbackMock).toHaveBeenCalledWith('test-dir/subdir/file2.js');
  });

  it('handles empty directory', async () => {
    const callbackMock = jest.fn();
    await forEachFile('test-dir', '.js', callbackMock);

    expect(callbackMock).not.toHaveBeenCalled();
  });

  it('handles non-existent directory', async () => {
    const consoleErrorMock = jest.spyOn(console, 'error');
    await forEachFile('non-existent-dir', '.js', () => {});

    expect(consoleErrorMock).toHaveBeenCalledTimes(1);
    consoleErrorMock.mockRestore();
  });
});