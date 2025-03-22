import fs from 'fs'
import { join } from 'path'

export const getAllFilesInFolder = contentFolder => {
	const dir = join(process.cwd(), contentFolder)
	return fs.readdirSync(dir)
}
