import fs from 'fs'
import { join } from 'path'
//import { parseMarkdown } from './markdown'
import { PATHS } from './PATHS'
import * as matter from 'gray-matter'

const getAll = contentFolder => {
	const dir = join(process.cwd(), PATHS.contentRoot, contentFolder)
	return fs.readdirSync(dir)
}

export const getVersions = folder => {
	let contentData = {}

	const files = getAll(folder).filter(f => f.startsWith('v'))

	files.forEach(f => {
		let parsed = loadMarkdownFromFile(f, folder)
		if (parsed) {
		let key =  parsed.frontmatter.standard_version
		contentData[key] = parsed
	}
	})
	const allVersions = Object.keys(contentData).sort().reverse()

	return [allVersions, contentData]
}

const buildPath = contentPath => {
	let result = join(process.cwd(), PATHS.contentRoot, contentPath)
	return result
}

const readFile = contentPath => {
	try {
		const path = buildPath(contentPath)
		const data = fs.readFileSync(path, 'utf8')
		return data
	} catch (err) {
		console.error(err)
	}
	return null
}

const parseMarkdowm = (fileContents)	=> {
	const parsed = matter(fileContents)
	if (parsed && !parsed.isEmpty) {
		const content = parsed.content
		const frontmatter = parsed.data
		return ({
			content: content,
		frontmatter: frontmatter
	})
		
	}
	return null
}

const loadMarkdownFromFile = (
	file, 
	folder
) => {
	const f = join(folder, file)

	const fileContents = readFile(f)
	const parsed = parseMarkdowm(fileContents)
	
	return parsed
}
