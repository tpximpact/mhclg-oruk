import {getNamedSiteItem} from './getNamedSiteItem'

const crumbtrailItem = (current, accumulator) => {
	let found = getNamedSiteItem(current)
	accumulator.push(found)
	if (found.parent) {
		accumulator = crumbtrailItem(found.parent, accumulator)
	}
	return accumulator
}

export const buildCrumbtrail = current => crumbtrailItem(current, []).reverse()
