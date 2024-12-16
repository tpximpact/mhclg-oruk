export const groupBy = (array, property) => {
		return array.reduce((acc, obj) => {
			const key = obj[property]
			if (!acc[key]) {
				acc[key] = []
			}
			acc[key].push(obj)
			return acc
		}, {})
	}