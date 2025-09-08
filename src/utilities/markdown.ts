import { join } from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { marked } from 'marked'

const CONTENT_ROOT = join(process.cwd(), 'content')

export const getMarkdownData = async (
	folderName: string,
	fileName: string
): Promise<{ data: any; content: any }> => {
	try {
		const fullFileName = join(CONTENT_ROOT, folderName, `${fileName}.md`)
		const fileContents = fs.readFileSync(fullFileName, { encoding: 'utf-8' })
		const { data, content } = matter(fileContents)
		const markdownContent = await marked.parse(content)

		return { data, content: markdownContent }
	} catch (error) {
		return { data: null, content: null }
	}
}
