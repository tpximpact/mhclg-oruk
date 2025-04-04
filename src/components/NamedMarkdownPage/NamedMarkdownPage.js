import { getNamedSiteItem } from '@/utilities/getNamedSiteItem'
import { readFile } from '@/utilities/readFile'
import { MarkdownPage } from './MarkdownPage'
import { PageMargin } from '@/components/PageMargin'
import { parseMarkdown } from '@/utilities/parseMarkdown'

export const NamedMarkdownPage = ({ name, noMargin, markdownRaw, ...props }) => {
	if (!markdownRaw) {
		const pageData = getNamedSiteItem(name)
		markdownRaw =
			pageData && pageData.contentPath
				? readFile({
						folder: pageData.contentPath
					})
				: null
	}
	const parsed = parseMarkdown(markdownRaw)
	const html = parsed ? parsed.content : null
	if (noMargin) return <MarkdownPage file={name} html={html} {...props} />
	return (
		<PageMargin>
			<MarkdownPage file={name} html={html} {...props} />
		</PageMargin>
	)
}
