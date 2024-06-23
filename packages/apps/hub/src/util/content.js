import fs from 'fs'
import { join } from 'path'
import { PATHS } from './paths'
import { FILE_EXTENSION } from './markdown'

export const slugsFrom = folder =>
	allFilesOfType(getPath(folder), FILE_EXTENSION).map(f => ({ slug: f.split('.')[0] }))

export const getPath = dir => join(process.cwd(), PATHS.contentRoot, dir)

export const allFilesOfType = (path, fileExtension) => {
	if (fs.existsSync(path)) {
		const result = fs.readdirSync(path).filter(f => f.split('.')[1] === fileExtension)
		return result
	}
}

export const readFile = ({ slug = 'index', folder }) => {
	const file = `${slug}.${FILE_EXTENSION}`
	const path = getPath(folder)
	const filePath = join(path, file)
	return fs.readFileSync(filePath, 'utf8')
}
