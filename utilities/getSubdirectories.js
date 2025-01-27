import fs from 'fs'
import { join } from 'path'

export const getSubdirectories = directoryPath => {
	const subdirectories = []

	try {
		const directoryContents = fs.readdirSync(directoryPath)

		directoryContents.forEach(item => {
			const itemPath = join(directoryPath, item)
			const stats = fs.statSync(itemPath)

			if (stats.isDirectory()) {
				subdirectories.push(itemPath)
			}
		})
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error(`Error reading directory: ${error}`)
	}

	return subdirectories
}
