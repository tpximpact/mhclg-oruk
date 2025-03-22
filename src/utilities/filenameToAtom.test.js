import { filenameToAtom } from './filenameToAtom'

describe('filenameToAtom utility', () => {
	it('should return the first part of a filename when index is 0', () => {
		expect(filenameToAtom('test.js', 0)).toBe('test')
		expect(filenameToAtom('my.file.js', 0)).toBe('my')
	})

	it('should return the extension when index is 1', () => {
		expect(filenameToAtom('test.js', 1)).toBe('js')
		expect(filenameToAtom('my.file.js', 1)).toBe('file')
	})

	it('should return null for non-string inputs', () => {
		expect(filenameToAtom(null, 0)).toBeNull()
		expect(filenameToAtom(undefined, 0)).toBeNull()
		expect(filenameToAtom(123, 0)).toBeNull()
	})

	it('should return undefined for index out of bounds', () => {
		expect(filenameToAtom('test.js', 2)).toBeUndefined()
		expect(filenameToAtom('test.js', -1)).toBeUndefined()
	})
})
