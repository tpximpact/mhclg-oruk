// manage a section that is generated on the fly - ie news

import fs from 'fs'
import { join } from 'path'
import * as matter from 'gray-matter'

import { PATHS } from './PATHS'

export const getDynamicPageContent = (folder, slug) => {
	const file = join(folder, unslugify(slug))
	const fileContents = readFile(file)
	const parsed = matter(fileContents)
	const metadata = parsed.data
	const all = getAll(folder)
	const myIndex = all.findIndex(element => slugify(element) === slug)
	const nextIndex = myIndex + 1
	const previousIndex = myIndex - 1
	return {
		date: getDate(metadata, file),
		metadata: metadata,
		content: parsed.content,
		next: buildLinkedItem(nextIndex, all, folder),
		previous: buildLinkedItem(previousIndex, all, folder)
	}
}

const buildLinkedItem = (index, allFiles, folder) => {
	if (index > allFiles.length - 1 || index < 0) return null
	const fileName = allFiles[index]
	const result = fileThumbnail(folder, fileName)
	return result
}

const slugify = fileName => fileName.split('.')[0]
const unslugify = name => name + '.md'

const getAll = contentFolder => {
	const dir = join(process.cwd(), PATHS.contentRoot, contentFolder)
	let result = fs.readdirSync(dir).filter(
		// needed for developing on a mac :-(
		f => f !== '.DS_Store'
	)
	return result
}

const getDate = (metadata, contentPath) => metadata.date || fileLastModified(contentPath)

const fileThumbnail = (rootContentFolder, file) => {
	const contentPath = join(rootContentFolder, file)
	const contents = readFile(contentPath)
	const metadata = extractMetadata(contents)
	return {
		title: metadata.title,
		path: slugify(contentPath),
		date: getDate(metadata, contentPath),
		slug: metadata.slug
	}
}

export const listDynamicSection = ({ rootContentFolder }) => {
	const filenames = getAll(rootContentFolder)

	let result = filenames.map(f => fileThumbnail(rootContentFolder, f))

	return result
}

const readFile = contentPath => {
	try {
		const path = buildPath(contentPath)
		const data = fs.readFileSync(path, 'utf8')
		return data
	} catch (err) {
		console.error(err)
	}
	return null
}

const extractMetadata = contents => matter(contents).data

const statFile = contentPath => {
	try {
		const path = buildPath(contentPath)
		const data = fs.statSync(path)
		return data
	} catch (err) {
		console.error(err)
	}
	return null
}

const fileLastModified = contentPath => {
	const s = statFile(contentPath)
	return s ? s.mtime.toLocaleDateString('en-GB') : null
}

const buildPath = contentPath => join(process.cwd(), PATHS.contentRoot, contentPath)
