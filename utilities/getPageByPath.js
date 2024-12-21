import { getExpandedPageTree } from './getExpandedPageTree'

/**
 * Retrieves a page by its URL path.
 *
 * @param {string} path - The URL path of the page to retrieve.
 * @returns {Object} The page with the specified URL path.
 */
export const getPageByPath = path => getExpandedPageTree().find(page => page.urlPath === path)
