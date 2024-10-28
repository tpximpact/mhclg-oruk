import {allFilesOfType} from './allFilesOfType'
import {getPath} from './getPath'

const FILE_EXTENSION = 'md'

export const slugsFrom = folder =>
	allFilesOfType(getPath(folder), FILE_EXTENSION).map(f => ({
		slug: f.split('.')[0]
	}))