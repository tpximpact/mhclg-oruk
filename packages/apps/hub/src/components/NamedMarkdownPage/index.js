import { readFile, getNamedSiteItem } from '@/util/content'
import { MarkdownContent } from '@/components/MarkdownContent'
import { PageMargin } from '@tpx/PageMargin'
export const NamedMarkdownPage = ({ name, autoMenu = true, children }) => {
	const pageData = getNamedSiteItem(name)
	const markdownRaw = readFile({
		folder: pageData.contentPath
	})
	return (
		<PageMargin>
			<MarkdownContent raw={markdownRaw} autoMenu={autoMenu} />
			{children}
		</PageMargin>
	)
}
