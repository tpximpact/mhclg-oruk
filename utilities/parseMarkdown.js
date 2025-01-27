import { marked } from 'marked'
import * as matter from 'gray-matter'

/**
 * Parse the markdown content of a file.
 * @param {string} fileContents - The content of the file.
 * @returns {Object|null} - The parsed content and frontmatter or null if parsing fails.
 */
export const parseMarkdown = fileContents => {
	const parsed = matter(fileContents)
	if (parsed && !parsed.isEmpty) {
		const content = marked.parse(parsed.content)
		const frontmatter = parsed.data
		return {
			content: content,
			frontmatter: frontmatter
		}
	}
	return null
}
