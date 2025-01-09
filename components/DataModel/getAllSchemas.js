export const getAllSchemas = data => {
	if (!data.schemata) return null
	const keys = Object.keys(data).sort()
	const allSchemas = keys.map(key => data[key].name || key)
	return allSchemas
}
