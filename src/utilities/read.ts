import fs from 'fs'
import { buildPath } from './buildPath'

export const read = (contentPath: string): string | null => {
	try {
		const path = buildPath(contentPath)
		const data = fs.readFileSync(path, 'utf8')
		return data
	} catch (err) {
		console.error(err)
	}
	return null
}
