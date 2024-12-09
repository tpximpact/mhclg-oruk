import { getNamedSiteItem } from '@/utilities/getNamedSiteItem'
import { readFile } from '@/utilities/readFile'
import { MarkdownPage } from './MarkdownPage'
import { PageMargin } from '@/components/PageMargin'

export const NamedMarkdownPage = ({ name, markdownRaw, ...props }) => {
	if (!markdownRaw) {
		const pageData = getNamedSiteItem(name)
		markdownRaw =
			pageData && pageData.contentPath
				? readFile({
						folder: pageData.contentPath
					})
				: null
	}
	return (
		<PageMargin>
			<MarkdownPage file={name} markdownRaw={markdownRaw} {...props} />
		</PageMargin>
	)
}
