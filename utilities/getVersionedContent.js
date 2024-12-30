import { join } from 'path'
import {getAllFilesInFolder} from './getAllFilesInFolder'
import {filenameToExtension} from './filenameToExtension'
import {filenameToName} from './filenameToName'
import {read} from './read'
import {parseMarkdown} from './parseMarkdown'

export const getVersionedContent = ({
	contentFolder,
	schemaFolder
}) => {
	// prepare markdown files
	const markdownFiles = getAllFilesInFolder(contentFolder).filter(
	 f => filenameToExtension(f) === "md" && filenameToName(f) !== "index"
	)
	// get all versions of schema
	const schemaFiles = getAllFilesInFolder(schemaFolder).filter(
	 f => filenameToExtension(f) === "json"
	)
	let data = {}
	schemaFiles.forEach (file => {
		// load json
		const name = filenameToName(file)
		const version = name.replace("_",".")
		const schemaFilePath = join(schemaFolder, file)
		const schemaContents = read(schemaFilePath)
		// load markdown
		let textContent
		const contentFileName = name+".md"
		if (markdownFiles.includes(contentFileName)){
			const contentFilePath = join(contentFolder, contentFileName)
			const fileContents = read(contentFilePath)
			const parsed = parseMarkdown(fileContents)
			textContent = parsed.content
		}
		// store
		data[version] = {
			// schema: JSON.parse(fileContents),
			textContent: textContent
		}
		
	})
	
	//for eaxh one see if we have accopanying markdown
	return data
}