import { join } from 'path'
import {getAllFilesInFolder} from './getAllFilesInFolder'
import {read} from './read'

const versionedContentVersionFromFilename = filename => {
	const name = filename.split(".")[0] + ""
	return name.replace("_",".")
}

export const loadVersionedJsonFiles = contentFolder =>
 {
	 const files = getAllFilesInFolder(contentFolder).filter(
	 f => f.split(".")[1] === "json"
	)
	let contentData = {}
	files.forEach (file => {
		const version = versionedContentVersionFromFilename(file)
		const filePath = join(contentFolder, file)
		const fileContents = read(filePath)
		contentData[version] = JSON.parse(fileContents)
		
	})
	
	 
	 return [ Object.keys(contentData).sort().reverse(),contentData]
 }