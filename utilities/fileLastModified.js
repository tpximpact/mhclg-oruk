import { statContentFile } from './statContentFile'

export const fileLastModified = contentPath => {
	try {
		const stats = statContentFile(contentPath)
		return stats ? stats.mtime.toLocaleDateString('en-GB') : null
	} catch (error) {
		console.error(`Error getting file stats for ${contentPath}:`, error)
		return null
	}
}
