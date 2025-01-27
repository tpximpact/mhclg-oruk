import { getRawPageTree } from './getRawPageTree'

/**
 * Retrieves the menu items for the 'info' section.
 *
 * @returns {Array} - The child nodes of the 'info' section.
 */
export const getInfoMenuItems = () => {
	const section = getRawPageTree().filter(item => item.name === 'info')[0]
	return section['childNodes']
}
