'use server'
import { marked } from 'marked'

export const MarkdownContent = ({ raw }) => {
	const html = marked.parse(raw)
	const markup = { __html: html }
	return <main dangerouslySetInnerHTML={markup} />
}
