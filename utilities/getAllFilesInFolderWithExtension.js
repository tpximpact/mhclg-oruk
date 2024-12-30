import {getAllFilesInFolder} from './getAllFilesInFolder'

import {filenameToExtension} from './filenameToExtension'

export const getAllFilesInFolderWithExtension = (folder,extension) => getAllFilesInFolder(folder).filter(
	 f => filenameToExtension(f) === extension
	)