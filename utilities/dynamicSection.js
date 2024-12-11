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
	return {
		date: getDate(metadata, file),
		metadata: metadata,
		content: parsed.content,
		next: buildLinkedItem(myIndex + 1, all, folder),
		previous: buildLinkedItem(myIndex - 1, all, folder)
	}
}

const buildLinkedItem = (index, allFiles, folder) => {
	if (index < 0 || index >= allFiles.length) return null
	const fileName = allFiles[index]
	return fileThumbnail(folder, fileName)
}

const slugify = fileName => fileName.split('.')[0]
const unslugify = name => `${name}.md`

const getAll = contentFolder => {
	const dir = join(process.cwd(), PATHS.contentRoot, contentFolder)
	return fs.readdirSync(dir).filter(f => f !== '.DS_Store')
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
	return filenames.map(f => fileThumbnail(rootContentFolder, f))
}

const readFile = contentPath => {
	try {
		const path = buildPath(contentPath)
		return fs.readFileSync(path, 'utf8')
	} catch (err) {
		console.error(err)
		return null
	}
}

const extractMetadata = contents => matter(contents).data

const statFile = contentPath => {
	try {
		const path = buildPath(contentPath)
		return fs.statSync(path)
	} catch (err) {
		console.error(err)
		return null
	}
}

const fileLastModified = contentPath => {
	const s = statFile(contentPath)
	return s ? s.mtime.toLocaleDateString('en-GB') : null
}

const buildPath = contentPath => join(process.cwd(), PATHS.contentRoot, contentPath)
