import fs from 'fs'
import { join } from 'path'
import { CONTENT_ROOT } from './constants'

export const readContentFile = contentPath => {
	try {
		return fs.readFileSync(join(CONTENT_ROOT, contentPath), 'utf8')
	} catch (err) {
		console.error(err)
		return null
	}
}
