import { flattenSite } from './flattenSite';
import { getRawPageTree } from './getRawPageTree';

// Mock the getRawPageTree module
jest.mock('./getRawPageTree');

describe('flattenSite', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test('should flatten a simple tree structure', () => {
    const mockTree = [
      {
        name: 'parent',
        label: 'Parent',
        urlPath: 'parent',
        contentPath: 'parent',
        childNodes: [
          {
            name: 'child',
            label: 'Child',
            urlPath: 'child',
            contentPath: 'child'
          }
        ]
      }
    ];

    getRawPageTree.mockReturnValue(mockTree);

    const result = flattenSite();
    
    expect(result).toHaveLength(2);
    expect(result[0]).toEqual(expect.objectContaining({
      name: 'child',
      label: 'Child',
      urlPath: 'parent/child',
      contentPath: 'parent/child',
      parent: 'parent'
    }));
    expect(result[1]).toEqual(expect.objectContaining({
      name: 'parent',
      label: 'Parent',
      urlPath: 'parent',
      contentPath: 'parent',
      childNodes: ['child']
    }));
  });

  test('should handle multiple levels of nesting', () => {
    const mockTree = [
      {
        name: 'root',
        urlPath: 'root',
        contentPath: 'root',
        childNodes: [
          {
            name: 'level1',
            urlPath: 'level1',
            contentPath: 'level1',
            childNodes: [
              {
                name: 'level2',
                urlPath: 'level2',
                contentPath: 'level2'
              }
            ]
          }
        ]
      }
    ];

    getRawPageTree.mockReturnValue(mockTree);

    const result = flattenSite();
    
    expect(result).toHaveLength(3);
    expect(result.find(item => item.name === 'level2')).toEqual(expect.objectContaining({
      name: 'level2',
      urlPath: 'root/level1/level2',
      contentPath: 'root/level1/level2',
      parent: 'level1'
    }));
  });

  test('should handle offsite links correctly', () => {
    const mockTree = [
      {
        name: 'parent',
        urlPath: 'parent',
        contentPath: 'parent',
        childNodes: [
          {
            name: 'external',
            urlPath: 'https://example.com',
            contentPath: 'external',
            offsite: true
          }
        ]
      }
    ];

    getRawPageTree.mockReturnValue(mockTree);

    const result = flattenSite();
    
    expect(result.find(item => item.name === 'external')).toEqual(expect.objectContaining({
      name: 'external',
      urlPath: 'https://example.com', // URL should not be modified for offsite links
      contentPath: 'external',
      offsite: true,
      parent: 'parent'
    }));
  });

  test('should handle empty tree', () => {
    getRawPageTree.mockReturnValue([]);
    const result = flattenSite();
    expect(result).toEqual([]);
  });

  test('should preserve all properties of nodes', () => {
    const mockTree = [
      {
        name: 'page',
        label: 'Page',
        urlPath: 'page',
        contentPath: 'page',
        customProp: 'value',
        childNodes: [
          {
            name: 'subpage',
            label: 'Subpage',
            urlPath: 'subpage',
            contentPath: 'subpage',
            anotherProp: 123
          }
        ]
      }
    ];

    getRawPageTree.mockReturnValue(mockTree);

    const result = flattenSite();
    
    expect(result.find(item => item.name === 'page')).toEqual(expect.objectContaining({
      customProp: 'value'
    }));
    expect(result.find(item => item.name === 'subpage')).toEqual(expect.objectContaining({
      anotherProp: 123
    }));
  });
}); 