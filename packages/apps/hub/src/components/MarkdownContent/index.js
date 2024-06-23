'use server'
import { marked } from 'marked'

export const MarkdownContent = ({raw}) => {
	const markup = { __html: marked.parse(raw) }
	return <main dangerouslySetInnerHTML={markup} />
}