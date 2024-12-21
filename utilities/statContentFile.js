import fs from 'fs'
import { join } from 'path'
import { CONTENT_ROOT } from './constants'

export const statContentFile = contentPath => {
	try {
		return fs.statSync(join(CONTENT_ROOT, contentPath))
	} catch (err) {
		console.error(err)
		return null
	}
}
