import { filenameToExtension } from '../filenameToExtension'

describe('filenameToExtension', () => {
  it('should extract the extension from filenames', () => {
    expect(filenameToExtension('index.html')).toBe('html')
    expect(filenameToExtension('document.pdf')).toBe('pdf')
    expect(filenameToExtension('styles.css')).toBe('css')
    expect(filenameToExtension('script.js')).toBe('js')
  })

  it('should handle files with multiple dots', () => {
    expect(filenameToExtension('archive.tar.gz')).toBe('tar')
    expect(filenameToExtension('config.prod.json')).toBe('prod')
  })

  it('should return undefined for files without extension', () => {
    expect(filenameToExtension('README')).toBeUndefined()
    expect(filenameToExtension('Dockerfile')).toBeUndefined()
  })

  it('should handle dotfiles', () => {
    expect(filenameToExtension('.gitignore')).toBe('gitignore')
    expect(filenameToExtension('.env')).toBe('env')
  })

  it('should return null for non-string inputs', () => {
    expect(filenameToExtension(null)).toBe(null)
    expect(filenameToExtension(undefined)).toBe(null)
  })

  it('should handle empty string', () => {
    expect(filenameToExtension('')).toBeUndefined()
  })
})
