import {getSiteItems} from './getSiteItems'

export const flattenSite = () => {
	return flatten(getSiteItems())
}

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