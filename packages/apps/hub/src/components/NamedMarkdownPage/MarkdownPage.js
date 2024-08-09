import { MarkdownContent } from './MarkdownContent'
import { MarkdownError } from './MarkdownError'
import { PageMargin } from '@tpx/PageMargin'

export const MarkdownPage = ({ autoMenu = true, children, markdownRaw }) => {
	return (
		<>
			{markdownRaw ? <MarkdownContent raw={markdownRaw} autoMenu={autoMenu} /> : <MarkdownError />}
			{children}
		</>
	)
}
