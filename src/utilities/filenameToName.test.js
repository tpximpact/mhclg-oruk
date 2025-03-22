import { filenameToName } from './filenameToName';

describe('filenameToName utility', () => {
  it('should return the first part of a filename', () => {
    expect(filenameToName('test.js')).toBe('test');
    expect(filenameToName('my.file.js')).toBe('my');
    expect(filenameToName('component.test.js')).toBe('component');
  });

  it('should return null for non-string inputs', () => {
    expect(filenameToName(null)).toBeNull();
    expect(filenameToName(undefined)).toBeNull();
    expect(filenameToName(123)).toBeNull();
  });

  it('should handle filenames without extensions', () => {
    expect(filenameToName('README')).toBe('README');
  });

  it('should handle filenames starting with a dot', () => {
    expect(filenameToName('.env')).toBe('');
    expect(filenameToName('.gitignore')).toBe('');
  });
}); 