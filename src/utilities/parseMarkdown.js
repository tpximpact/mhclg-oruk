import { marked } from 'marked'
import * as matter from 'gray-matter'

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
