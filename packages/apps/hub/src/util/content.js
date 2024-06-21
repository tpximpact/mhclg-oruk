import fs from 'fs'
import { join } from 'path'
import { PATHS } from './paths'

export const slugsFrom = (folder, extension) =>
	allFilesOfType(getPath(folder), extension).map(f => ({ slug: f.split('.')[0] }))

const getPath = dir => join(process.cwd(), PATHS.contentRoot, dir)

const allFilesOfType = (path, fileExtension) => {
	if (fs.existsSync(path)) {
		const result = fs.readdirSync(path).filter(f => f.split('.')[1] === fileExtension)
		return result
	}
}

export const readFile = ({ file, folder }) => {
	const path = getPath(folder)
	const filePath = join(path, file)
	return fs.readFileSync(filePath, 'utf8')
}
