import { readFile, getNamedSiteItem } from '../../util/content'
import { MarkdownPage } from './MarkdownPage'

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
	return <MarkdownPage file={name} markdownRaw={markdownRaw} {...props} />
}
