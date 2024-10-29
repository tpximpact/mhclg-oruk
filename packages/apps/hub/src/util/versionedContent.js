import fs from 'fs'
import { join } from 'path'
import { parseMarkdown } from './markdown'
import { PATHS } from './PATHS'

const getAll = contentFolder => {
	const dir = join(process.cwd(), PATHS.contentRoot, contentFolder)
	return fs.readdirSync(dir)
}

export const getVersions = folder => {
	let contentData = {}

	const files = getAll(folder).filter(f => f.startsWith('v'))

	files.forEach(f => {
		let parsed = loadMarkdownFromFile(f, folder)
		let key = parsed.frontmatter.standard_version
		contentData[key] = parsed
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

/*
export const getVersionedContent = (folder) =>
     {
let result = {}

const files = ["v1.md","v3.md"]

files.forEach(
    f =>  {
        let parsed = loadMarkdownFromFile(f,folder)
        let key = parsed.frontmatter.standard_version
        result[key] = parsed
    }
)

console.log(result)

return result

     }
*/
const loadMarkdownFromFile = (file, folder) => {
	const f = join(folder, file)

	const fileContents = readFile(f)
	const parsed = parseMarkdown(fileContents)

	return parsed
}
