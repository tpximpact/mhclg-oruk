import { join } from 'path'
import * as matter from 'gray-matter'
import { slugify } from './slugUtils'
import { getMarkdownFileModifiedDate } from './getMarkdownFileModifiedDate'
import { readContentFile } from './readContentFile'

export const fileThumbnail = (rootContentFolder, file) => {
	const contentPath = join(rootContentFolder, file)
	const contents = readContentFile(contentPath)
	const { data: metadata } = matter(contents)
	return {
		title: metadata.title,
		path: slugify(contentPath),
		date: getMarkdownFileModifiedDate(metadata, contentPath),
		slug: metadata.slug
	}
}
