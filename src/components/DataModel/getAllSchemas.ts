interface SchemaData {
	name?: string
	[key: string]: any
}

export const getAllSchemas = (data: Record<string, SchemaData> | null | undefined): string[] | null => {
	if (!data) return null
	const keys = Object.keys(data).sort()
	const allSchemas = keys.map(key => data[key].name || key)
	return allSchemas
}
