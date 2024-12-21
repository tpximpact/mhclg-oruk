import { fileThumbnail } from './fileThumbnail';

export const dynamicSectionPaging = (index, allFiles, folder) => {
	if (index < 0 || index >= allFiles.length) return null
	const fileName = allFiles[index]
	return fileThumbnail(folder, fileName)
}
