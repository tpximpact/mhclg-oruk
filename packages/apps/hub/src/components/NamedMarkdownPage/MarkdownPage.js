import { MarkdownContent } from './MarkdownContent'
import { MarkdownError } from './MarkdownError'

export const MarkdownPage = ({ autoMenu = true, children, markdownRaw }) => {
	return (
		<>
			{markdownRaw ? <MarkdownContent raw={markdownRaw} autoMenu={autoMenu} /> : <MarkdownError />}
			{children}
		</>
	)
}
