import fs from 'fs'
import { join } from 'path'
import structure from '../../content/sitemap.json'

const crumbtrailItem = (current, accumulator) => {
	let found = getNamedSiteItem(current)
	accumulator.push(found)
	if (found.parent) {
		accumulator = crumbtrailItem(found.parent, accumulator)
	}
	return accumulator
}

export const buildCrumbtrail = current => crumbtrailItem(current, []).reverse()

const flatten = (a, parent) => {
	a = JSON.parse(JSON.stringify(a))
	if (parent) {
		parent = JSON.parse(JSON.stringify(parent))
	}
	let result = []
	a.forEach(item => {
		let items = []
		if (parent) {
			item.parent = parent.name
			//console.log(parent )
			if (!item.offsite) {
				item.urlPath = parent.urlPath + '/' + item.urlPath
				item.contentPath = parent.contentPath + '/' + item.contentPath
			}
		}
		if (item.childNodes) {
			items = flatten(item.childNodes, item)
			item.childNodes = item.childNodes.map(child => child.name)
		}
		items.push(item)
		result = result.concat(items)
	})
	//console.log(result)
	return result
}

export const flattenSite = () => {
	return flatten(structure)
}

export const getNamedSiteItem = name => {
	const r = flattenSite().filter(item => item.name === name)[0]
	return r
}

export const getSiteItems = () => structure

export const childNodesOfNamedSiteItem = name => {
	const item = getNamedSiteItem(name)
	if (!item) return
	return item.childNodes.map(child => getNamedSiteItem(child))
}

export const PATHS = {
	contentRoot: 'content',
	developer: 'developer'
}

const FILE_EXTENSION = 'md'

export const buildItemMenuData = dir => {
	const baseURL = '/how/'
	const files = allFilesOfType(getPath(dir), FILE_EXTENSION)
		.filter(f => f !== 'index.md')
		.map(item => ({
			urlPath: baseURL + fileNameToURL(item),
			label: fileNameToLabel(item)
		}))
	return files
}

const fileNameToURL = fileName => fileName.split('.')[0]
const fileNameToLabel = fileName => {
	let result = fileName.split('.')[0]
	const regex = /^[0-9]*/i
	result = result.replace(regex, '')
	result = result.replace('-', '')
	result = result.replaceAll('-', ' ')
	result = result.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, function (c) {
		return c.toUpperCase()
	})
	return result
}

export const slugsFrom = folder =>
	allFilesOfType(getPath(folder), FILE_EXTENSION).map(f => ({
		slug: f.split('.')[0]
	}))

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
