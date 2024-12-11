export const configValueToBoolean = v => {
	if (v) {
		return JSON.parse(v.toLowerCase())
	}
	return false
}
