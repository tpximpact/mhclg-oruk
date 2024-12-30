import { join } from 'path'
import {getAllFilesInFolderWithExtension} from './getAllFilesInFolderWithExtension'
import {filenameToExtension} from './filenameToExtension'
import {filenameToName} from './filenameToName'
import {read} from './read'
import {parseMarkdown} from './parseMarkdown'

export const getVersionedContent = ({
	contentFolder,
	schemaFolder
}) => {
	let result = {}
	// prepare markdown files
	const markdownFiles = getAllFilesInFolderWithExtension(contentFolder,"md").filter(
	 f => filenameToName(f) !== "index"
	)
	// get all versions of schema
	const schemaFiles = getAllFilesInFolderWithExtension(schemaFolder,"json")
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
		result[version] = {
			// schema: JSON.parse(fileContents),
			textContent: textContent
		}
		
	})
	
	return result
}