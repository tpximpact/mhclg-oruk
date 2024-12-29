import { join } from 'path'
import { PATHS } from './PATHS'

/**
 * Build the full path to a content file.
 * @param {string} contentPath - The relative path to the content file.
 * @returns {string} - The full path to the content file.
 */
export const buildPath = contentPath => {
	let result = join(process.cwd(), PATHS.contentRoot, contentPath)
	return result
}