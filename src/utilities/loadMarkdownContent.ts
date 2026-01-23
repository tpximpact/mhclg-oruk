import { join } from 'path'
import { read } from './read'
import { parseMarkdown } from './parseMarkdown'

export const loadMarkdownContent = (fileName: string, contentSubFolder: string): string => {
  const contentFilePath = join(contentSubFolder, fileName)
  const contentRaw = read(contentFilePath)
  if (!contentRaw) {
    console.warn(`Markdown file not found: ${contentFilePath}`)
    return ''
  }
  const contentParsed = parseMarkdown(contentRaw)?.content
  return contentParsed || ''
}
