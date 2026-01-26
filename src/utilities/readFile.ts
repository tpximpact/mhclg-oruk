import fs from 'fs'
import { join } from 'path'

import { getPath } from './getPath'

const FILE_EXTENSION = 'md'

interface ReadFileOptions {
	slug?: string
	folder: string
}

export const readFile = ({ slug = 'index', folder }: ReadFileOptions): string => {
	const file = `${slug}.${FILE_EXTENSION}`
	const path = getPath(folder)
	const filePath = join(path, file)
	return fs.readFileSync(filePath, 'utf8')
}
