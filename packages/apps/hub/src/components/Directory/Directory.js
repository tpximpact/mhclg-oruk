import { PaginatedTable } from '@/components/PaginatedTable'
import { generate } from '@/components/Dashboard'

// TODO real data !

const data = generate({
	rowsPerPage: 10,
	numRows: 35,
	failEveryNRows: 3
})

export const Directory = ({ currentPage }) => {
	const columns = data.definitions.views.directory.columns
	const headers = data.definitions.columns
	let rows = data.data

	rows = rows.filter(row => row.statusOverall.value > 0)
	const rowsPerPage = data.definitions.views.directory.rowsPerPage

	return (
		<PaginatedTable
			rowsPerPage={rowsPerPage}
			columns={columns}
			headers={headers}
			rows={rows}
			currentPage={currentPage}
		/>
	)
}
