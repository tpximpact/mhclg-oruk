import {getAllFilesInFolder} from './getAllFilesInFolder'

export const loadVersionedJsonFiles = contentFolder =>
 {
	 const files = getAllFilesInFolder(contentFolder)
	 let allVersions = ["1.0","3.0"]
	 let contentData = {}
	 return [ allVersions,
		 contentData]
 }