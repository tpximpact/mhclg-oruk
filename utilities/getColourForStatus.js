import { STATUS, STATUS_PROPERTIES } from './status'

/**
 * Retrieves the colour for a given status.
 *
 * @param {string} status - The status to get the colour for.
 * @returns {string} - The colour associated with the status.
 */
export const getColourForStatus = status =>
	STATUS_PROPERTIES[status]?.colour || STATUS_PROPERTIES[STATUS.OTHER].colour
