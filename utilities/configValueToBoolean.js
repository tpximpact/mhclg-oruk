/**
 * Converts a configuration value to a boolean.
 *
 * @param {string} v - The configuration value to convert.
 * @returns {boolean} - The boolean representation of the configuration value.
 */
export const configValueToBoolean = v => {
	if (typeof v !== 'string') return false
	const normalizedValue = v.trim().toLowerCase()
	if (normalizedValue === 'true') return true
	if (normalizedValue === 'false') return false
	if (!v) return false
	try {
		return JSON.parse(normalizedValue)
	} catch (e) {
		return false
	}
}
