import { STATUS } from './status'

/**
 * Convert a result to a status.
 * @param {Object} data - The data containing the service result.
 * @param {Object} data.service - The service object.
 * @param {boolean} data.service.isValid - Whether the service is valid.
 * @returns {string} - The status.
 */
export const resultToStatus = data => (data.service.isValid === true ? STATUS.PASS : STATUS.FAIL)
