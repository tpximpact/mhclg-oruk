import { getExpandedPageTree } from './getExpandedPageTree'

export const getPageByPath = path => getExpandedPageTree().find(page => page.urlPath === path)
