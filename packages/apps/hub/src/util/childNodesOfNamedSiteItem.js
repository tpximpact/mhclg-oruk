import { getNamedSiteItem } from './getNamedSiteItem'

export const childNodesOfNamedSiteItem = name => {
	const item = getNamedSiteItem(name)
	if (!item) return
	return item.childNodes.map(child => getNamedSiteItem(child))
}
