import { dynamicSectionPaging } from './dynamicSectionPaging';
import { fileThumbnail } from './fileThumbnail';

jest.mock('./fileThumbnail');

describe('dynamicSectionPaging', () => {
  const folder = 'testFolder';
  const allFiles = ['file1.txt', 'file2.txt', 'file3.txt'];

  beforeEach(() => {
    fileThumbnail.mockClear();
  });

  it('should throw an error if arguments are invalid', () => {
    expect(() => dynamicSectionPaging('0', allFiles, folder)).toThrow('Invalid arguments');
    expect(() => dynamicSectionPaging(0, 'notAnArray', folder)).toThrow('Invalid arguments');
    expect(() => dynamicSectionPaging(0, allFiles, 123)).toThrow('Invalid arguments');
  });

  it('should return null if index is out of bounds', () => {
    expect(dynamicSectionPaging(-1, allFiles, folder)).toBeNull();
    expect(dynamicSectionPaging(3, allFiles, folder)).toBeNull();
  });

  it('should call fileThumbnail with correct arguments', () => {
    dynamicSectionPaging(1, allFiles, folder);
    expect(fileThumbnail).toHaveBeenCalledWith(folder, 'file2.txt');
  });

  it('should return the result of fileThumbnail', () => {
    fileThumbnail.mockReturnValue('thumbnail');
    const result = dynamicSectionPaging(1, allFiles, folder);
    expect(result).toBe('thumbnail');
  });
});
