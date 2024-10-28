export const fileNameToLabel = fileName => {
	let result = fileName.split('.')[0]
	const regex = /^[0-9]*/i
	result = result.replace(regex, '')
	result = result.replace('-', '')
	result = result.replaceAll('-', ' ')
	result = result.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, function (c) {
		return c.toUpperCase()
	})
	return result
}