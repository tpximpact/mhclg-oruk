const fs = require('fs').promises
const updateFrontMatter = require('./updateFrontMatter')
const jest = require('jest-mock')

jest.mock('fs')

describe('updateFrontMatter', () => {
	const filePath = 'example.md'
	const fileContent = `---
title: Example
---
Content`

	beforeEach(() => {
		jest.restoreAllMocks()
		fs.mockImplementation({
			stat: async () => ({ mtimeMs: new Date('2022-01-01T00:00:00.000Z').getTime() }),
			readFile: async () => fileContent,
			writeFile: jest.fn()
		})
	})

	afterEach(() => {
		jest.clearAllMocks()
	})

	it('updates front matter with modified date', async () => {
		await updateFrontMatter(filePath)
		expect(fs.writeFile).toHaveBeenCalledTimes(1)
		expect(fs.writeFile).toHaveBeenCalledWith(
			filePath,
			expect.stringContaining('modified: 2022-01-01T00:00:00.000Z')
		)
	})

	it('does not update front matter if already current', async () => {
		const currentFileContent = `---
title: Example
modified: 2022-01-01T00:00:00.000Z
---
Content`
		fs.readFile.mockImplementationOnce(() => currentFileContent)
		await updateFrontMatter(filePath)
		expect(fs.writeFile).not.toHaveBeenCalled()
	})

	it('throws error if no front matter found', async () => {
		const noFrontMatterContent = 'No front matter'
		fs.readFile.mockImplementationOnce(() => noFrontMatterContent)
		await expect(updateFrontMatter(filePath)).rejects.toThrow('No front matter found in the file.')
	})

	it('throws error if file stat fails', async () => {
		fs.stat.mockImplementationOnce(() => Promise.reject(new Error('Stat error')))
		await expect(updateFrontMatter(filePath)).rejects.toThrow('Stat error')
	})

	it('throws error if file read fails', async () => {
		fs.readFile.mockImplementationOnce(() => Promise.reject(new Error('Read error')))
		await expect(updateFrontMatter(filePath)).rejects.toThrow('Read error')
	})

	it('throws error if file write fails', async () => {
		fs.writeFile.mockImplementationOnce(() => Promise.reject(new Error('Write error')))
		await expect(updateFrontMatter(filePath)).rejects.toThrow('Write error')
	})

	it('supports dry run', async () => {
		await updateFrontMatter(filePath, { dryRun: true })
		expect(fs.writeFile).not.toHaveBeenCalled()
	})

	it('supports custom date format', async () => {
		await updateFrontMatter(filePath, { dateFormat: 'RFC2822' })
		expect(fs.writeFile).toHaveBeenCalledTimes(1)
		expect(fs.writeFile).toHaveBeenCalledWith(
			filePath,
			expect.stringContaining('modified: Sat, 01 Jan 2022 00:00:00 GMT')
		)
	})

	it('supports custom date property', async () => {
		await updateFrontMatter(filePath, { dateProperty: 'updated' })
		expect(fs.writeFile).toHaveBeenCalledTimes(1)
		expect(fs.writeFile).toHaveBeenCalledWith(
			filePath,
			expect.stringContaining('updated: 2022-01-01T00:00:00.000Z')
		)
	})

	it('supports force update', async () => {
		const currentFileContent = `---
title: Example
modified: 2022-01-01T00:00:00.000Z
---
Content`
		fs.readFile.mockImplementationOnce(() => currentFileContent)
		await updateFrontMatter(filePath, { force: true })
		expect(fs.writeFile).toHaveBeenCalledTimes(1)
	})
})
