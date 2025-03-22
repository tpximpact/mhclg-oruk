import { join } from 'path'
import { buildPath } from './buildPath'
import { PATHS } from './PATHS'

jest.mock('path')
jest.mock('./PATHS', () => ({
	PATHS: {
		contentRoot: 'content'
	}
}))

describe('buildPath', () => {
	beforeEach(() => {
		jest.clearAllMocks()
		process.cwd = jest.fn().mockReturnValue('/test/root')
		join.mockImplementation((...paths) => paths.join('/'))
	})

	it('should correctly join paths with content root', () => {
		const contentPath = 'test/path'
		const result = buildPath(contentPath)

		expect(process.cwd).toHaveBeenCalled()
		expect(join).toHaveBeenCalledWith('/test/root', PATHS.contentRoot, contentPath)
		expect(result).toBe('/test/root/content/test/path')
	})

	it('should handle empty content path', () => {
		const result = buildPath('')

		expect(process.cwd).toHaveBeenCalled()
		expect(join).toHaveBeenCalledWith('/test/root', PATHS.contentRoot, '')
		expect(result).toBe('/test/root/content/')
	})

	it('should handle absolute content path', () => {
		const contentPath = '/absolute/path'
		const result = buildPath(contentPath)

		expect(process.cwd).toHaveBeenCalled()
		expect(join).toHaveBeenCalledWith('/test/root', PATHS.contentRoot, contentPath)
		expect(result).toBe('/test/root/content//absolute/path')
	})
})
