/**
 * Expand paths for a node and its children.
 * @param {Object} node - The node to expand paths for.
 * @param {Object|null} parentNode - The parent node.
 * @returns {Object} - The node with expanded paths.
 */
const expandPaths = (node, parentNode) => {
	// id this node is offsite, nothing to do
	if (node.offsite) return node

	// expand oarhs in this node
	if (parentNode) {
		node.contentPath = parentNode.contentPath + '/' + node.contentPath
		node.urlPath = parentNode.urlPath + '/' + node.urlPath
	}

	// recurse over children
	if (node.childNodes) {
		node.childNodes = node.childNodes.map(child => expandPaths(child, node))
	}

	// done
	return node
}

/**
 * Get site structure with full paths.
 * @param {Object[]} structure - The site structure.
 * @returns {Object[]} - The site structure with full paths.
 */
export const siteStructureWithFullPaths = structure => {
	let result = JSON.parse(JSON.stringify(structure))
	result.map(node => expandPaths(node, null))
	return result
}

/**
 * Get children of a named site item.
 * @param {string} name - The name of the site item.
 * @param {Object[]} structure - The site structure.
 * @returns {Object[]} - The children of the named site item.
 */
export const childrenOfNamedSiteItem = (name, structure) => {
	const item = getNamedSiteItem(name, structure)
	return childrenOfSiteItem(item)
}

/**
 * Get children of a site item.
 * @param {Object} item - The site item.
 * @param {Object[]} structure - The site structure.
 * @returns {Object[]} - The children of the site item.
 */
export const childrenOfSiteItem = (item, structure) => {
	if (!item) return
	return item.children?.map(child => getNamedSiteItem(child, structure))
}

/**
 * Get a named site item.
 * @param {string} name - The name of the site item.
 * @param {Object[]} structure - The site structure.
 * @returns {Object} - The named site item.
 */
export const getNamedSiteItem = (name, structure) =>
	flatten(structure).filter(item => item.name === name)[0]

/**
 * Get a site item by its path.
 * @param {string} path - The path of the site item.
 * @param {Object[]} structure - The site structure.
 * @returns {Object} - The site item with the specified path.
 */
export const getPathedSiteItem = (path, structure) => {
	console.log(reallyFlatten(structure))
	return flatten(structure).filter(item => item.urlPath === path)[0]
}

/**
 * Flatten an array of site items.
 * @param {Object[]} arr - The array to flatten.
 * @returns {Object[]} - The flattened array.
 */
const reallyFlatten = (
	arr
	//, parent
) => {
	arr = JSON.parse(JSON.stringify(arr))
	let result = []
	arr.forEach(item => {
		result.push(item)
		if (item.childNodes) {
			result.concat(reallyFlatten(item.childNodes))
		}
	})
	return result
}

/**
 * Flatten an array of site items with their parent.
 * @param {Object[]} a - The array to flatten.
 * @param {Object|null} parent - The parent item.
 * @returns {Object[]} - The flattened array.
 */
export const flatten = (a, parent) => {
	a = JSON.parse(JSON.stringify(a))
	if (parent) {
		parent = JSON.parse(JSON.stringify(parent))
	}
	let result = []
	a.forEach(item => {
		let items = []
		if (parent) {
			item.parent = parent.name
			if (!item.offsite) {
				item.urlPath = parent.urlPath + '/' + item.urlPath
				item.contentPath = parent.contentPath + '/' + item.contentPath
			}
		}
		if (item.children) {
			items = flatten(item.children, item)
			item.children = item.children.map(child => child.name)
		}
		items.push(item)
		result = result.concat(items)
	})
	return result
}
