
const expandPaths = (node, parentNode) => {
	// id this node is offsite, nothing to do
	if (node.offsite) return node

	// expand paths in this node
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


export const siteStructureWithFullPaths = structure => {
	let result = JSON.parse(JSON.stringify(structure))
	result.map(node => expandPaths(node, null))
	return result
}


export const childrenOfNamedSiteItem = (name, structure) => {
	const item = getNamedSiteItem(name, structure)
	return childrenOfSiteItem(item)
}


export const childrenOfSiteItem = (item, structure) => {
	if (!item) return
	return item.children?.map(child => getNamedSiteItem(child, structure))
}


export const getNamedSiteItem = (name, structure) =>
	flatten(structure).filter(item => item.name === name)[0]


export const getPathedSiteItem = (path, structure) => {
	//console.log(reallyFlatten(structure))
	return flatten(structure).filter(item => item.urlPath === path)[0]
}

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
