import fs from 'fs'
import { join } from 'path'

const SUBFOLDER = 'developer'
const EXTENSION = 'md'

export const generateStaticParams = () => slugsFrom(SUBFOLDER,EXTENSION)
export default function Page({ params }) {
	const { slug } = params
	const markdownRaw = readFile({file:`${slug}.${EXTENSION}`,folder:SUBFOLDER})
	return <div>{markdownRaw}</div>
}

const slugsFrom = (folder,extension) => allFilesOfType(getPath(folder), extension).map(f => ({slug:f}))

const getPath = dir => join(process.cwd(), 'content', dir)

const allFilesOfType = (path, fileExtension) => {
	if (fs.existsSync(path)) {
		const result = fs.readdirSync(path).filter(f => f.split('.')[1] === fileExtension)
		return result
	}
}

export const readFile = ({ file, folder }) => {
	const path = getPath(folder)
	const filePath = join(path, file)
	return fs.readFileSync(filePath, 'utf8')
}
