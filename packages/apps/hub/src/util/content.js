import fs from 'fs'
import { join } from 'path'
import { PATHS } from './paths'
import { FILE_EXTENSION } from './markdown'

export const buildItemMenuData = dir =>
	allFilesOfType(getPath(dir), FILE_EXTENSION)
		.filter(f => f !== 'index.md')
		.map(item => ({
			target: fileNameToTarget(item),
			text: fileNameToText(item)
		}))

const fileNameToTarget = fileName => fileName.split('.')[0]
const fileNameToText = fileName => {
	let result = fileName.split('.')[0]
	const regex = /^[0-9]*/i
	result = result.replace(regex, '')
	result = result.replace('-', '')
	result = result.replaceAll('-', ' ')
	result = result.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
		return c.toUpperCase()
	})
	return result
}

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
