import { flattenSite } from './flattenSite'

/**
 * Retrieves a site item by its name.
 *
 * @param {string} name - The name of the site item to retrieve.
 * @returns {Object} The site item with the specified name.
 */
export const getNamedSiteItem = name => {
	const r = flattenSite().filter(item => item.name === name)[0]
	return r
}
