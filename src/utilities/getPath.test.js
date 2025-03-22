import { join } from 'path'
import { getPath } from './getPath'
import { PATHS } from './PATHS'

jest.mock('path')
jest.mock('./PATHS', () => ({
  PATHS: {
    contentRoot: 'content'
  }
}))

describe('getPath', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    process.cwd = jest.fn().mockReturnValue('/test/root')
    join.mockImplementation((...paths) => paths.join('/'))
  })

  it('should correctly join paths with content root', () => {
    const dir = 'test/directory'
    const result = getPath(dir)
    
    expect(process.cwd).toHaveBeenCalled()
    expect(join).toHaveBeenCalledWith('/test/root', PATHS.contentRoot, dir)
    expect(result).toBe('/test/root/content/test/directory')
  })

  it('should handle empty directory path', () => {
    const result = getPath('')
    
    expect(process.cwd).toHaveBeenCalled()
    expect(join).toHaveBeenCalledWith('/test/root', PATHS.contentRoot, '')
    expect(result).toBe('/test/root/content/')
  })

  it('should handle absolute directory path', () => {
    const dir = '/absolute/path'
    const result = getPath(dir)
    
    expect(process.cwd).toHaveBeenCalled()
    expect(join).toHaveBeenCalledWith('/test/root', PATHS.contentRoot, dir)
    expect(result).toBe('/test/root/content//absolute/path')
  })
}) 