export const formatDate = (dateString: string): string => {
	const options: Intl.DateTimeFormatOptions = {
		hour: 'numeric',
		minute: 'numeric',
		year: '2-digit',
		month: '2-digit',
		day: '2-digit'
	}
	return new Date(dateString).toLocaleDateString(undefined, options)
}
