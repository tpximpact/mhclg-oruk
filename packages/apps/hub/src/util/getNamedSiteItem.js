import { flattenSite} from './flattenSite'

export const getNamedSiteItem = name => {
	const r = flattenSite().filter(item => item.name === name)[0]
	return r
}