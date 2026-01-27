import { getExpandedPageTree } from './getExpandedPageTree'

export const getPageByPath = (path: string) =>
  getExpandedPageTree().find(page => page.urlPath === path)
