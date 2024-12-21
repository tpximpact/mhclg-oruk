import fs from 'fs'
import { join } from 'path'
//import { parseMarkdown } from './markdown'
import { PATHS } from './PATHS'
import * as matter from 'gray-matter'

/**
 * Get all files in a content folder.
 * @param {string} contentFolder - The folder to get files from.
 * @returns {string[]} - Array of filenames.
 */
const getAll = contentFolder => {
	const dir = join(process.cwd(), PATHS.contentRoot, contentFolder)
	return fs.readdirSync(dir)
}

/**
 * Get versions of content from a folder.
 * @param {string} folder - The folder to get versions from.
 * @returns {[string[], Object]} - Array of version keys and content data.
 */
export const getVersions = folder => {
	let contentData = {}

	const files = getAll(folder).filter(f => f.startsWith('v'))

	files.forEach(f => {
		let parsed = loadMarkdownFromFile(f, folder)
		if (parsed) {
			let key = parsed.frontmatter.standard_version
			contentData[key] = parsed
		}
	})
	const allVersions = Object.keys(contentData).sort().reverse()

	return [allVersions, contentData]
}

/**
 * Build the full path to a content file.
 * @param {string} contentPath - The relative path to the content file.
 * @returns {string} - The full path to the content file.
 */
const buildPath = contentPath => {
	let result = join(process.cwd(), PATHS.contentRoot, contentPath)
	return result
}

/**
 * Read the content of a file.
 * @param {string} contentPath - The relative path to the content file.
 * @returns {string|null} - The content of the file or null if an error occurs.
 */
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

/**
 * Parse the markdown content of a file.
 * @param {string} fileContents - The content of the file.
 * @returns {Object|null} - The parsed content and frontmatter or null if parsing fails.
 */
const parseMarkdowm = fileContents => {
	const parsed = matter(fileContents)
	if (parsed && !parsed.isEmpty) {
		const content = parsed.content
		const frontmatter = parsed.data
		return {
			content: content,
			frontmatter: frontmatter
		}
	}
	return null
}

/**
 * Load and parse markdown content from a file.
 * @param {string} file - The filename.
 * @param {string} folder - The folder containing the file.
 * @returns {Object|null} - The parsed content and frontmatter or null if loading or parsing fails.
 */
const loadMarkdownFromFile = (file, folder) => {
	const f = join(folder, file)

	const fileContents = readFile(f)
	const parsed = parseMarkdowm(fileContents)

	return parsed
}
