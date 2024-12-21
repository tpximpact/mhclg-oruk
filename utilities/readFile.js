import fs from 'fs'
import { join } from 'path'

import { getPath } from './getPath'

const FILE_EXTENSION = 'md'

/**
 * Read the content of a file.
 * @param {Object} options - The options for reading the file.
 * @param {string} options.slug - The slug of the file (default is 'index').
 * @param {string} options.folder - The folder containing the file.
 * @returns {string} - The content of the file.
 */
export const readFile = ({ slug = 'index', folder }) => {
	const file = `${slug}.${FILE_EXTENSION}`
	const path = getPath(folder)
	const filePath = join(path, file)
	return fs.readFileSync(filePath, 'utf8')
}
