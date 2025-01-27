import { getRawPageTree } from './getRawPageTree'

/**
 * Flattens the site structure.
 *
 * @returns {Array} - The flattened site structure.
 */
export const flattenSite = () => {
	return flatten(getRawPageTree())
}

/**
 * Recursively flattens the site structure.
 *
 * @param {Array} a - The array to flatten.
 * @param {Object} [parent] - The parent node.
 * @returns {Array} - The flattened array.
 */
const flatten = (a, parent) => {
	a = JSON.parse(JSON.stringify(a))
	if (parent) {
		parent = JSON.parse(JSON.stringify(parent))
	}
	let result = []
	a.forEach(item => {
		let items = []
		if (parent) {
			item.parent = parent.name
			//console.log(parent )
			if (!item.offsite) {
				item.urlPath = parent.urlPath + '/' + item.urlPath
				item.contentPath = parent.contentPath + '/' + item.contentPath
			}
		}
		if (item.childNodes) {
			items = flatten(item.childNodes, item)
			item.childNodes = item.childNodes.map(child => child.name)
		}
		items.push(item)
		result = result.concat(items)
	})
	//console.log(result)
	return result
}
