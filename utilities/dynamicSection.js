// manage a section that is generated on the fly - ie news
import fs from 'fs'
import { join } from 'path'
import * as matter from 'gray-matter'
import { slugify} from './slugUtils'
import { CONTENT_ROOT } from './constants';

export const getDynamicPageContent = (folder, slug) => {
	const file = join(folder, `${slug}.md`)
	const fileContents = readContentFile(file)
	const { data: metadata, content } = matter(fileContents)
	const allFiles = getAllContentFilesInFolder(folder)
	const index = allFiles.findIndex(file => slugify(file) === slug)

	return {
		date: getMarkdownFileModifiedDate(metadata, file),
		metadata,
		content,
		next: dynamicSectionPaging(index + 1, allFiles, folder),
		previous: dynamicSectionPaging(index - 1, allFiles, folder)
	}
}

const dynamicSectionPaging = (index, allFiles, folder) => {
	if (index < 0 || index >= allFiles.length) return null
	const fileName = allFiles[index]
	return fileThumbnail(folder, fileName)
}

const getAllContentFilesInFolder= contentFolder => {
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
	const contents = readContentFile(contentPath)
	const { data: metadata } = matter(contents)
	return {
		title: metadata.title,
		path: slugify(contentPath),
		date: getMarkdownFileModifiedDate(metadata, contentPath),
		slug: metadata.slug
	}
}

export const listDynamicSection = ({ rootContentFolder }) => {
	const filenames = getAllContentFilesInFolder(rootContentFolder)
	return filenames.map(f => fileThumbnail(rootContentFolder, f))
}

const readContentFile = contentPath => {
	try {
		return fs.readFileSync(join(CONTENT_ROOT, contentPath), 'utf8')
	} catch (err) {
		console.error(err)
		return null
	}
}

const statContentFile= contentPath => {
	try {
		return fs.statSync(join(CONTENT_ROOT, contentPath))
	} catch (err) {
		console.error(err)
		return null
	}
}

const fileLastModified = contentPath => {
	const stats = statContentFile(contentPath)
	return stats ? stats.mtime.toLocaleDateString('en-GB') : null
}
