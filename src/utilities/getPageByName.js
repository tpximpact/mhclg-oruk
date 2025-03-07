import { getExpandedPageTree } from './getExpandedPageTree'

export const getPageByName = name => getExpandedPageTree().find(page => page.name === name)
