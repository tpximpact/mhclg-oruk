export const childrenOfNamedSiteItem = (name,structure)=> {
	const item = getNamedSiteItem(name,structure)
	if (!item) return
	return item.children.map(child => getNamedSiteItem(child,structure))
}

export const getNamedSiteItem = (name,structure) => 
	flatten(structure).filter(item => item.name === name)[0]

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