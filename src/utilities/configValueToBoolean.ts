export const configValueToBoolean = (value: string | undefined | null): boolean => {
	if (!value) return false
	return JSON.parse(value.toLowerCase())
}
