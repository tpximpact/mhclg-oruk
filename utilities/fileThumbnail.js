import { join } from 'path'
import * as matter from 'gray-matter'
import { slugify } from './slugUtils'
import { getMarkdownFileModifiedDate } from './getMarkdownFileModifiedDate'
import { readContentFile } from './readContentFile'

export const fileThumbnail = (rootContentFolder, file) => {
	const contentPath = join(rootContentFolder, file)
	const contents = readContentFile(contentPath)
	const { data: metadata } = matter(contents)
	
	const title = metadata.title
	const path = slugify(contentPath)
	const date = getMarkdownFileModifiedDate(metadata, contentPath)
	const slug = metadata.slug
	
	return { title, path, date, slug }
}
