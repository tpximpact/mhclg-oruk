import { expandTree } from './expandTree'
import { getRawPageTree } from './getRawPageTree'

/**
 * Retrieves the expanded page tree.
 *
 * @returns - The expanded page tree.
 */
export const getExpandedPageTree = () => expandTree(getRawPageTree(), undefined)
