import { readFile, getNamedSiteItem } from '@/util/content'
import { MarkdownContent } from '@/components/MarkdownContent'
import { PageMargin } from '@tpx/PageMargin'
export const NamedMarkdownPage = ({ name, autoMenu = true, children }) => {
	const pageData = getNamedSiteItem(name)
	const markdownRaw =
		pageData && pageData.contentPath
			? readFile({
					folder: pageData.contentPath
				})
			: null
	return (
		<PageMargin>
			{markdownRaw ? <MarkdownContent raw={markdownRaw} autoMenu={autoMenu} /> : <MarkdownError />}
			{children}
		</PageMargin>
	)
}

const MarkdownError = () => <div>Sorry the requested content file counld not be read</div>
