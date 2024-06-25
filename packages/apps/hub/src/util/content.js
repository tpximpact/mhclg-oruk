import fs from 'fs'
import { join } from 'path'

export const PATHS = {
	contentRoot: 'content',
	developer: 'developer'
}

const FILE_EXTENSION = 'md'

export const slugsFrom = (folder) =>
	allFilesOfType(getPath(folder), FILE_EXTENSION).map(f => ({ slug: f.split('.')[0] }))

const getPath = dir => join(process.cwd(), PATHS.contentRoot, dir)

const allFilesOfType = (path, fileExtension) => {
	if (fs.existsSync(path)) {
		const result = fs.readdirSync(path).filter(f => f.split('.')[1] === fileExtension)
		return result
	}
}

export const readFile = ({ slug, folder }) => {
	const file = `${slug}.${FILE_EXTENSION}`
	const path = getPath(folder)
	const filePath = join(path, file)
	return fs.readFileSync(filePath, 'utf8')
}
