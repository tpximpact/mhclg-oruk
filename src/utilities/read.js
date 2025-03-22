import fs from 'fs'
import { buildPath } from './buildPath'

export const read = contentPath => {
	try {
		const path = buildPath(contentPath)
		const data = fs.readFileSync(path, 'utf8')
		return data
	} catch (err) {
		// eslint-disable-next-line no-console
		console.error(err)
	}
	return null
}
