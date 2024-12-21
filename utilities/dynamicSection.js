// manage a section that is generated on the fly - ie news
import fs from 'fs'
import { join } from 'path'
import * as matter from 'gray-matter'
import { slugify} from './slugUtils'
import { CONTENT_ROOT } from './constants';

export const getDynamicPageContent = (folder, slug) => {
	const file = join(folder, `${slug}.md`)
	const fileContents = readFile(file)
	const { data: metadata, content } = matter(fileContents)
	const allFiles = getAllFiles(folder)
	const index = allFiles.findIndex(file => slugify(file) === slug)

	return {
		date: getMarkdownFileModifiedDate(metadata, file),
		metadata,
		content,
		next: buildLinkedItem(index + 1, allFiles, folder),
		previous: buildLinkedItem(index - 1, allFiles, folder)
	}
}

const buildLinkedItem = (index, allFiles, folder) => {
	if (index < 0 || index >= allFiles.length) return null
	const fileName = allFiles[index]
	return fileThumbnail(folder, fileName)
}

const getAllFiles = contentFolder => {
	const dir = join(CONTENT_ROOT, contentFolder)
	const dirents = fs.readdirSync(dir, { withFileTypes: true })
	return dirents
		.filter(dirent => dirent.isFile())
		.map(dirent => dirent.name)
		.filter(f => f !== '.DS_Store')
}

const getMarkdownFileModifiedDate = (metadata, contentPath) => metadata.date || fileLastModified(contentPath)

const fileThumbnail = (rootContentFolder, file) => {
	const contentPath = join(rootContentFolder, file)
	const contents = readFile(contentPath)
	const { data: metadata } = matter(contents)
	return {
		title: metadata.title,
		path: slugify(contentPath),
		date: getMarkdownFileModifiedDate(metadata, contentPath),
		slug: metadata.slug
	}
}

export const listDynamicSection = ({ rootContentFolder }) => {
	const filenames = getAllFiles(rootContentFolder)
	return filenames.map(f => fileThumbnail(rootContentFolder, f))
}

const readFile = contentPath => {
	try {
		return fs.readFileSync(join(CONTENT_ROOT, contentPath), 'utf8')
	} catch (err) {
		console.error(err)
		return null
	}
}

const extractMetadata = contents => matter(contents).data

const statFile = contentPath => {
	try {
		return fs.statSync(join(CONTENT_ROOT, contentPath))
	} catch (err) {
		console.error(err)
		return null
	}
}

const fileLastModified = contentPath => {
	const stats = statFile(contentPath)
	return stats ? stats.mtime.toLocaleDateString('en-GB') : null
}
