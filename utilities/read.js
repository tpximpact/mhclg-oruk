import fs from 'fs'
import { buildPath } from './buildPath'
/**
 * Read the content of a file.
 * @param {string} contentPath - The relative path to the content file.
 * @returns {string|null} - The content of the file or null if an error occurs.
 */
export const read = contentPath => {
	try {
		const path = buildPath(contentPath)
		const data = fs.readFileSync(path, 'utf8')
		return data
	} catch (err) {
		console.error(err)
	}
	return null
}
