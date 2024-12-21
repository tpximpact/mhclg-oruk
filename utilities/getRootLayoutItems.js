import { siteStructureWithFullPaths } from './menuing'
import { getRawPageTree } from './getRawPageTree'
import { listDynamicSection } from './dynamicSection'

/**
 * Retrieves the root layout items, including dynamic sections.
 *
 * @returns {Array} The root layout items.
 */
export const getRootLayoutItems = () => {
	let result = siteStructureWithFullPaths(getRawPageTree()).filter(item => item.hide != true)
	result.map(item => {
		if (item.dynamic) {
			let dynamicOverflow
			let dynamicChildNodes = listDynamicSection({
				rootContentFolder: item.urlPath
			})
			const count = dynamicChildNodes.length
			const limit = 3
			if (count > limit) {
				dynamicChildNodes = dynamicChildNodes.slice(0, limit)
				dynamicOverflow = count - limit
			}
			item.dynamicOverflow = dynamicOverflow
			item.dynamicChildNodes = dynamicChildNodes
			return item
		}
	})
	return result
}
