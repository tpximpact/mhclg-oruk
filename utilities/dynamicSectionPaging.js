import { fileThumbnail } from './fileThumbnail'

export const dynamicSectionPaging = (index, allFiles, folder) => {
	if (!Array.isArray(allFiles) || typeof index !== 'number' || typeof folder !== 'string') {
		throw new Error('Invalid arguments')
	}
	if (index < 0 || index >= allFiles.length) return null
	const fileName = allFiles[index]
	return fileThumbnail(folder, fileName)
}
