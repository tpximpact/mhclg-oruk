import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'
import remarkFrontmatter from 'remark-frontmatter'
import remarkParseFrontmatter from 'remark-parse-frontmatter'
import { remark } from 'remark'

export const parseMarkdown = raw => {
	const processed = remark()
		.use(remarkParse)
		.use(remarkHtml)
		.use(remarkFrontmatter, ['yaml', 'toml'])
		.use(remarkParseFrontmatter)
		.processSync(raw)

	return {
		content: processed.value,
		frontmatter: processed.data.frontmatter
	}
}
