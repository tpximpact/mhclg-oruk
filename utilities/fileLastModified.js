import { statContentFile } from './statContentFile'

export const fileLastModified = contentPath => {
	const stats = statContentFile(contentPath)
	return stats ? stats.mtime.toLocaleDateString('en-GB') : null
}
