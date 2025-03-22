import { filenameToExtension } from './filenameToExtension'

describe('filenameToExtension', () => {
  it('should return the file extension from a filename', () => {
    expect(filenameToExtension('test.txt')).toBe('txt')
    expect(filenameToExtension('image.jpg')).toBe('jpg')
    expect(filenameToExtension('script.test.js')).toBe('test')
  })

  it('should return undefined for filenames without extensions', () => {
    expect(filenameToExtension('README')).toBe(undefined)
    expect(filenameToExtension('')).toBe(undefined)
  })

  it('should handle invalid inputs', () => {
    expect(filenameToExtension(null)).toBe(null)
    expect(filenameToExtension(undefined)).toBe(null)
    expect(filenameToExtension(123)).toBe(null)
  })
}) 