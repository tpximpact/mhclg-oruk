import fs from 'fs'
import { join } from 'path'

import {getPath} from './getPath'

const FILE_EXTENSION = 'md'

export const readFile = ({ slug = 'index', folder }) => {
	const file = `${slug}.${FILE_EXTENSION}`
	const path = getPath(folder)
	const filePath = join(path, file)
	return fs.readFileSync(filePath, 'utf8')
}