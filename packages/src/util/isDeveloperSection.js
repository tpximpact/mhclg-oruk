export const isDeveloperSection = path => {
	const target = '/developers'
	return path.startsWith(target)
}
