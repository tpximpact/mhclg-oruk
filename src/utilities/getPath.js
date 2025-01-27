import { join } from 'path'
import { PATHS } from './PATHS'

/**
 * Constructs an absolute path by joining the current working directory, content root, and the specified directory.
 *
 * @param {string} dir - The directory to join.
 * @returns {string} The constructed absolute path.
 */
export const getPath = dir => join(process.cwd(), PATHS.contentRoot, dir)
