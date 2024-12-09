export const expandTree = (structure, parentNode) => {
	let structureCopy = structuredClone(structure)
	let expanded = []
	structureCopy.forEach(item => {
		if (parentNode) {
			item.parentNodeName = parentNode.name
			if (!item.offsite) {
				item.urlPath = parentNode.urlPath + '/' + item.urlPath
			}
		}
		if (item.childNodes) {
			// recursiveky process children
			let children = expandTree(item.childNodes, item)
			expanded = expanded.concat(children)
		}
		delete item.childNodes
		expanded.push(item)
	})
	return expanded
}