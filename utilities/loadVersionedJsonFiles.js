import {getAllFilesInFolder} from './getAllFilesInFolder'

const versionedContentVersionFromFilename = filename => {
	const name = filename.split(".")[0] + ""
	return name.replace("_",".")
}

export const loadVersionedJsonFiles = contentFolder =>
 {
	 const files = getAllFilesInFolder(contentFolder).filter(
	 f => f.split(".")[1] === "json"
	)
	 let allVersions = files.map(
	 	f => 
			versionedContentVersionFromFilename(f)
		
	 ).sort().reverse()
	 let contentData = {
		 payload: allVersions
		}
	 return [ allVersions,
		 contentData]
 }