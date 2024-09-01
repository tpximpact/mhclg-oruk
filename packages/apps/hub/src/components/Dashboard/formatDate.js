export const formatDate = dateString => {
	const options = {
		hour: 'numeric',
		minute: 'numeric',
		year: '2-digit',
		month: '2-digit',
		day: 'numeric'
	}
	return new Date(dateString).toLocaleDateString(undefined, options)
}