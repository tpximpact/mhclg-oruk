import { fileLastModified } from './fileLastModified'

export const getMarkdownFileModifiedDate = (metadata, contentPath) =>
	metadata.date || fileLastModified(contentPath)
