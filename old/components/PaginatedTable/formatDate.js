export const formatDate = dateString => {
	const options = {
		hour: 'numeric',
		minute: 'numeric',
		year: '2-digit',
		month: '2-digit',
		day: '2-digit'
	}
	return new Date(dateString).toLocaleDateString(undefined, options)
}
