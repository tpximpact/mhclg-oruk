// manage a section that is generated on the fly - ie news

import fs from 'fs'
import { join } from 'path'
import * as matter from 'gray-matter'

import { PATHS } from './PATHS'

/**
 * Retrieves the dynamic page content.
 *
 * @param {string} folder - The folder containing the content.
 * @param {string} slug - The slug of the content.
 * @returns {Object} - The dynamic page content.
 */
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

/**
 * Builds a linked item.
 *
 * @param {number} index - The index of the item.
 * @param {Array} allFiles - All files in the folder.
 * @param {string} folder - The folder containing the files.
 * @returns {Object|null} - The linked item or null if out of bounds.
 */
const buildLinkedItem = (index, allFiles, folder) => {
	if (index < 0 || index >= allFiles.length) return null
	const fileName = allFiles[index]
	return fileThumbnail(folder, fileName)
}

const slugify = fileName => fileName.split('.')[0]
const unslugify = name => `${name}.md`

/**
 * Retrieves all files in a content folder.
 *
 * @param {string} contentFolder - The content folder.
 * @returns {Array} - The list of file names.
 */
const getAll = contentFolder => {
	const dir = join(process.cwd(), PATHS.contentRoot, contentFolder)
	const dirents = fs.readdirSync(dir, { withFileTypes: true })
	const filesNames = dirents
		.filter(dirent => dirent.isFile())
		.map(dirent => dirent.name)
		.filter(f => f !== '.DS_Store')
	return filesNames
}

/**
 * Retrieves the date of the content.
 *
 * @param {Object} metadata - The metadata of the content.
 * @param {string} contentPath - The path to the content.
 * @returns {string} - The date of the content.
 */
const getDate = (metadata, contentPath) => metadata.date || fileLastModified(contentPath)

/**
 * Retrieves the thumbnail for a file.
 *
 * @param {string} rootContentFolder - The root content folder.
 * @param {string} file - The file name.
 * @returns {Object} - The file thumbnail.
 */
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

/**
 * Lists the dynamic section.
 *
 * @param {Object} options - The options for listing.
 * @param {string} options.rootContentFolder - The root content folder.
 * @returns {Array} - The list of dynamic section items.
 */
export const listDynamicSection = ({ rootContentFolder }) => {
	const filenames = getAll(rootContentFolder)
	return filenames.map(f => fileThumbnail(rootContentFolder, f))
}

/**
 * Reads a file.
 *
 * @param {string} contentPath - The path to the content.
 * @returns {string|null} - The file contents or null if an error occurs.
 */
const readFile = contentPath => {
	try {
		const path = buildPath(contentPath)
		return fs.readFileSync(path, 'utf8')
	} catch (err) {
		console.error(err)
		return null
	}
}

/**
 * Extracts metadata from the contents.
 *
 * @param {string} contents - The file contents.
 * @returns {Object} - The extracted metadata.
 */
const extractMetadata = contents => matter(contents).data

/**
 * Retrieves the file statistics.
 *
 * @param {string} contentPath - The path to the content.
 * @returns {fs.Stats|null} - The file statistics or null if an error occurs.
 */
const statFile = contentPath => {
	try {
		const path = buildPath(contentPath)
		return fs.statSync(path)
	} catch (err) {
		console.error(err)
		return null
	}
}

/**
 * Retrieves the last modified date of the file.
 *
 * @param {string} contentPath - The path to the content.
 * @returns {string|null} - The last modified date or null if an error occurs.
 */
const fileLastModified = contentPath => {
	const s = statFile(contentPath)
	return s ? s.mtime.toLocaleDateString('en-GB') : null
}

/**
 * Builds the full path to the content.
 *
 * @param {string} contentPath - The path to the content.
 * @returns {string} - The full path to the content.
 */
const buildPath = contentPath => join(process.cwd(), PATHS.contentRoot, contentPath)
