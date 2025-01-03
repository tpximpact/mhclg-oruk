import fs from 'fs'
import { join } from 'path'
import { PATHS } from './PATHS'

/**
 * Get all files in a content folder.
 * @param {string} contentFolder - The folder to get files from.
 * @returns {string[]} - Array of filenames.
 */
export const getAllFilesInFolder = contentFolder => {
	const dir = join(process.cwd(), PATHS.contentRoot, contentFolder)
	return fs.readdirSync(dir)
}
