import sort from './TableSorting.module.css'

export const getSortingOptions = (view, data) =>
	view.sortBy.map(col => [col, data.definitions.columns[col].label])

export const DIRECTION = {
	ASCENDING: 'ascending',
	DESCENDING: 'descending'
}

export const getSortedRows = ({ sortColumn, data, sortDirection }) => {
	const compareRows = (a, b) => {
		const valA = String(a[sortColumn].value).toUpperCase()
		const valB = String(b[sortColumn].value).toUpperCase()
		if (valA < valB) {
			return -1
		}
		if (valA > valB) {
			return 1
		}

		//return 0;

		// these columns are the same so sort on name instead
		if (a.name.value < b.name.value) {
			return -1
		} else {
			return 1
		}
	}

	let newSortedRows = data.data.sort(compareRows)

	if (sortDirection === DIRECTION.DESCENDING) {
		newSortedRows = newSortedRows.reverse()
	}

	return newSortedRows
}

export const TableSorting = ({
	values,
	onValueChange,
	onDirectionChange,
	selectedValue,
	selectedDirection,
	...rest
}) => {
	return (
		<div className={sort.sorting}>
			<label htmlFor='sortBy'>Sort by... </label>

			<select
			id="sortBy"
				defaultValue={selectedValue}
				onChange={({ target: { value } }) => onValueChange(value)}
				{...rest}
			>
				{values.map(([value, text]) => (
					<option key={value} value={value}>
						{text}
					</option>
				))}
			</select>
			<label htmlFor='sortDir'>Sort direction </label>

			<select
				id="sortDir"
				defaultValue={selectedDirection}
				onChange={({ target: { value } }) => onDirectionChange(value)}
				{...rest}
			>
				<option value={DIRECTION.ASCENDING}>Ascending</option>
				<option value={DIRECTION.DESCENDING}>Descending</option>
			</select>
		</div>
	)
}
