import { join } from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { marked } from 'marked'

const CONTENT_ROOT = join(process.cwd(), 'content')

export type MarkdownMetadata = {
	title: string
	description: string
	modified: string // ISO date string
	layout: string
	links: {
		previous: {
			title: string
			path: string
		}
		next: {
			title: string
			path: string
		}
	}
	image?: string
}

export const getMarkdownData = async (
	folderName: string,
	fileName: string
): Promise<{ data: MarkdownMetadata | null; content: string | null }> => {
	try {
		const fullFileName = join(CONTENT_ROOT, folderName, `${fileName}.md`)
		const fileContents = fs.readFileSync(fullFileName, { encoding: 'utf-8' })
		const { data, content } = matter(fileContents)
		const markdownContent = await marked.parse(content)

		return { data: data as MarkdownMetadata, content: markdownContent }
	} catch (error) {
		return { data: null, content: null }
	}
}
