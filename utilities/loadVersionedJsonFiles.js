import {getAllFilesInFolder} from './getAllFilesInFolder'

export const loadVersionedJsonFiles = contentFolder =>
 {
	 const files = getAllFilesInFolder(contentFolder).filter(
	 f => f.split(".")[1] === "json"
	)
	 let allVersions = files.map(
	 	f => {
			const name = f.split(".")[0] + ""
			return name.replace("_",".")
		}
	 ).reverse()
	 let contentData = {
		 payload: files
		}
	 return [ allVersions,
		 contentData]
 }