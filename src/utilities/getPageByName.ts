import { getExpandedPageTree } from './getExpandedPageTree'

export const getPageByName = (name: string) =>
  getExpandedPageTree().find(page => page.name === name)
