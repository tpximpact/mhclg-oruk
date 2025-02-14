import { STATUS, STATUS_PROPERTIES } from './status'

/**
 * Retrieves the icon for a given status.
 *
 * @param {string} status - The status to get the icon for.
 * @returns {string} - The icon associated with the status.
 */
export const getIconForStatus = status =>
	STATUS_PROPERTIES[status]?.icon || STATUS_PROPERTIES[STATUS.OTHER].icon
