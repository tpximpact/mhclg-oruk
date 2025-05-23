// manage a section that is generated on the fly - ie news
import fs from 'fs'
import { join } from 'path'
import * as matter from 'gray-matter'
import { parseMarkdown } from '@/utilities/parseMarkdown'
import { PATHS } from './PATHS'
import { notFound } from 'next/navigation'

const CONTENT_ROOT = join(process.cwd(), PATHS.contentRoot)

export const getDynamicPageContent = (folder, slug) => {
	const file = join(folder, `${slug}.md`)
	const fileContents = readFile(file)
	const { frontmatter, content } = parseMarkdown(fileContents)
	const allFiles = getAllFiles(folder)
	const index = allFiles.findIndex(file => slugify(file) === slug)

	return {
		date: getDate(frontmatter, file),
		metadata: frontmatter,
		html: content,
		next: buildLinkedItem(index + 1, allFiles, folder),
		previous: buildLinkedItem(index - 1, allFiles, folder)
	}
}

const buildLinkedItem = (index, allFiles, folder) => {
	if (index < 0 || index >= allFiles.length) return null
	const fileName = allFiles[index]
	return fileThumbnail(folder, fileName)
}

export const slugify = fileName => fileName.split('.')[0]
// const unslugify = name => `${name}.md`

export const getAllFiles = contentFolder => {
	const dir = join(CONTENT_ROOT, contentFolder)
	const dirents = fs.readdirSync(dir, { withFileTypes: true })
	return dirents
		.filter(dirent => dirent.isFile())
		.map(dirent => dirent.name)
		.filter(f => f !== '.DS_Store')
}

const getDate = (metadata, contentPath) => {
	const raw = metadata.modified || fileLastModified(contentPath)
	const date = new Date(raw)
	return date.toLocaleDateString('en-GB')
}

const fileThumbnail = (rootContentFolder, file) => {
	const contentPath = join(rootContentFolder, file)
	const contents = readFile(contentPath)
	const { data: metadata } = matter(contents)
	return {
		title: metadata.title,
		path: slugify(contentPath),
		//date: getDate(metadata, contentPath),
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
		// eslint-disable-next-line no-console
		console.error(err)
		notFound()
	}
}

// const extractMetadata = contents => matter(contents).data

const statFile = contentPath => {
	try {
		return fs.statSync(join(CONTENT_ROOT, contentPath))
	} catch (err) {
		// eslint-disable-next-line no-console
		console.error(err)
		return null
	}
}

const fileLastModified = contentPath => {
	// NB mtime will be default if the file has been theough git - which is why we bake them into metadata
	const stats = statFile(contentPath)
	return stats.mtime
}
