import { MarkdownContent } from './MarkdownContent'
import { MarkdownError } from './MarkdownError'

export const MarkdownPage = ({ autoMenu = true, children, html, file }) => {
	return (
		<>
			{html ? <MarkdownContent html={html} autoMenu={autoMenu} /> : <MarkdownError file={file} />}
			{children}
		</>
	)
}
