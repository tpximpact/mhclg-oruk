import { siteStructureWithFullPaths } from './menuing'
import { getRawPageTree } from './getRawPageTree'
import { listDynamicSection } from './dynamicSection'

const DYNAMIC_SECTION_ITEMCOUNT_LIMIT = 4

export const getRootLayoutItems = () => {
	let result = siteStructureWithFullPaths(getRawPageTree()).filter(item => item.hide != true)
	result.map(item => {
		if (item.dynamic) {
			let dynamicOverflow
			let dynamicChildNodes = listDynamicSection({
				rootContentFolder: item.urlPath
			})
			const count = dynamicChildNodes.length
			const limit = DYNAMIC_SECTION_ITEMCOUNT_LIMIT
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
