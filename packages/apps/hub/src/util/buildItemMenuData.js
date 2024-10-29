import { allFilesOfType } from './allFilesOfType'
import { fileNameToURL } from './fileNameToURL'
import { fileNameToLabel } from './fileNameToLabel'
import { getPath } from './getPath'

const FILE_EXTENSION = 'md'

export const buildItemMenuData = dir => {
	const baseURL = '/how/'
	const files = allFilesOfType(getPath(dir), FILE_EXTENSION)
		.filter(f => f !== 'index.md')
		.map(item => ({
			urlPath: baseURL + fileNameToURL(item),
			label: fileNameToLabel(item)
		}))
	return files
}
