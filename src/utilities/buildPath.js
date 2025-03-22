import { join } from 'path'
import { PATHS } from './PATHS'

export const buildPath = contentPath => {
	let result = join(process.cwd(), PATHS.contentRoot, contentPath)
	return result
}
