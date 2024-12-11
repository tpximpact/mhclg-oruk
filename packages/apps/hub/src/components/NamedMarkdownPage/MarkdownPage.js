import { MarkdownContent } from './MarkdownContent'
import { MarkdownError } from './MarkdownError'

export const MarkdownPage = ({ autoMenu = true, children, markdownRaw, file }) => {
	return (
		<>
			{markdownRaw ? (
				<MarkdownContent raw={markdownRaw} autoMenu={autoMenu} />
			) : (
				<MarkdownError file={file} />
			)}
			{children}
		</>
	)
}
