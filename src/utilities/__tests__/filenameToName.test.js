import { filenameToName } from '../filenameToName'

describe('filenameToName', () => {
  it('should extract the name without extension', () => {
    expect(filenameToName('index.html')).toBe('index')
    expect(filenameToName('document.pdf')).toBe('document')
    expect(filenameToName('styles.css')).toBe('styles')
  })

  it('should handle files with multiple dots', () => {
    expect(filenameToName('archive.tar.gz')).toBe('archive')
    expect(filenameToName('config.prod.json')).toBe('config')
  })

  it('should handle files without extension', () => {
    expect(filenameToName('README')).toBe('README')
    expect(filenameToName('Dockerfile')).toBe('Dockerfile')
  })

  it('should handle dotfiles', () => {
    expect(filenameToName('.gitignore')).toBe('')
    expect(filenameToName('.env')).toBe('')
  })

  it('should return null for non-string inputs', () => {
    expect(filenameToName(null)).toBe(null)
    expect(filenameToName(undefined)).toBe(null)
  })

  it('should handle empty string', () => {
    expect(filenameToName('')).toBe('')
  })
})
