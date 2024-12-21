// manage a section that is generated on the fly - ie news
import { join } from 'path'
import * as matter from 'gray-matter'
import { slugify } from './slugUtils'
import { dynamicSectionPaging } from './dynamicSectionPaging'
import { getAllContentFilesInFolder } from './getAllContentFilesInFolder'
import { getMarkdownFileModifiedDate } from './getMarkdownFileModifiedDate'
import { readContentFile } from './readContentFile'
import { fileThumbnail } from './fileThumbnail'

export const getDynamicPageContent = (folder, slug) => {
	const file = join(folder, `${slug}.md`)
	const fileContents = readContentFile(file)
	const { data: metadata, content } = matter(fileContents)
	const allFiles = getAllContentFilesInFolder(folder)
	const index = allFiles.findIndex(file => slugify(file) === slug)

	return {
		date: getMarkdownFileModifiedDate(metadata, file),
		metadata,
		content,
		next: dynamicSectionPaging(index + 1, allFiles, folder),
		previous: dynamicSectionPaging(index - 1, allFiles, folder)
	}
}

export const listDynamicSection = ({ rootContentFolder }) => {
	const filenames = getAllContentFilesInFolder(rootContentFolder)
	return filenames.map(f => fileThumbnail(rootContentFolder, f))
}
