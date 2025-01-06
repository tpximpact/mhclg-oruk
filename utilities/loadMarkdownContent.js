import { join} from 'path'
import { read } from './read'
import { parseMarkdown } from './parseMarkdown'

export const loadMarkdownContent = (fileName, contentSubFolder) => {
    const contentFilePath = join(contentSubFolder, fileName)
	const contentRaw =read(contentFilePath)
	const contentParsed= parseMarkdown(contentRaw).content
    return contentParsed
}