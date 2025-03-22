import { getRawPageTree } from './getRawPageTree';

// Mock the sitemap.json import
jest.mock('../../content/sitemap.json', () => [
  {
    name: 'home',
    label: 'home',
    contentPath: '/home',
    hide: true
  },
  {
    name: 'not-found',
    label: '404',
    contentPath: '/404',
    hide: true
  }
]);

describe('getRawPageTree', () => {
  it('should return the page tree from sitemap.json', () => {
    const result = getRawPageTree();
    
    expect(result).toEqual([
      {
        name: 'home',
        label: 'home',
        contentPath: '/home',
        hide: true
      },
      {
        name: 'not-found',
        label: '404',
        contentPath: '/404',
        hide: true
      }
    ]);
  });

  it('should return the same reference when called multiple times', () => {
    const firstCall = getRawPageTree();
    const secondCall = getRawPageTree();
    
    expect(firstCall).toBe(secondCall);
  });
}); 