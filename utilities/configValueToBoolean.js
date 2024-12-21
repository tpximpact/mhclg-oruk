/**
 * Converts a configuration value to a boolean.
 *
 * @param {string} v - The configuration value to convert.
 * @returns {boolean} - The boolean representation of the configuration value.
 */
export const configValueToBoolean = v => {
	if (!v) return false
	try {
		return JSON.parse(v.toLowerCase())
	} catch (e) {
		return false
	}
}
