import fs from 'fs'
import { join } from 'path'
import { CONTENT_ROOT } from './constants'

export const getAllContentFilesInFolder = contentFolder => {
	const dir = join(CONTENT_ROOT, contentFolder)
	const dirents = fs.readdirSync(dir, { withFileTypes: true })

	return dirents
		.filter(dirent => dirent.isFile() && dirent.name !== '.DS_Store')
		.map(dirent => dirent.name)
}
