import { filenameToAtom } from '../filenameToAtom'

describe('filenameToAtom', () => {
  it('should extract the name part (index 0) of a filename', () => {
    expect(filenameToAtom('index.html', 0)).toBe('index')
    expect(filenameToAtom('document.pdf', 0)).toBe('document')
  })

  it('should extract the extension part (index 1) of a filename', () => {
    expect(filenameToAtom('index.html', 1)).toBe('html')
    expect(filenameToAtom('document.pdf', 1)).toBe('pdf')
  })

  it('should handle files with multiple dots', () => {
    expect(filenameToAtom('archive.tar.gz', 0)).toBe('archive')
    expect(filenameToAtom('archive.tar.gz', 1)).toBe('tar')
    expect(filenameToAtom('archive.tar.gz', 2)).toBe('gz')
  })

  it('should handle files without extension', () => {
    expect(filenameToAtom('README', 0)).toBe('README')
    expect(filenameToAtom('README', 1)).toBeUndefined()
  })

  it('should return null for non-string inputs', () => {
    expect(filenameToAtom(null, 0)).toBe(null)
    expect(filenameToAtom(undefined, 0)).toBe(null)
    expect(filenameToAtom(123, 0)).toBe(null)
  })

  it('should handle empty string', () => {
    expect(filenameToAtom('', 0)).toBe('')
    expect(filenameToAtom('', 1)).toBeUndefined()
  })

  it('should handle dotfiles', () => {
    expect(filenameToAtom('.gitignore', 0)).toBe('')
    expect(filenameToAtom('.gitignore', 1)).toBe('gitignore')
  })

  it('should return undefined for out of bounds index', () => {
    expect(filenameToAtom('file.txt', 5)).toBeUndefined()
  })
})
