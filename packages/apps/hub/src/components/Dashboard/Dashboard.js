import { PaginatedTable } from '@/components/PaginatedTable'
import { generate } from './generateDummyData'

// TODO real data !

const data = generate({
	rowsPerPage: 10,
	numRows: 35,
	failEveryNRows: 3
})

export const Dashboard = ({ currentPage }) => {
	const columns = data.definitions.views.dashboard.columns
	const headers = data.definitions.columns
	const rowsPerPage = data.definitions.views.dashboard.rowsPerPage

	return (
		<PaginatedTable
			rowsPerPage={rowsPerPage}
			columns={columns}
			headers={headers}
			rows={data.data}
			currentPage={currentPage}
		/>
	)
}

/*
export const Directory = () => {
	const columns = data.definitions.views.directory.columns
	const headers = data.definitions.columns
	let rows = data.data

	rows = rows.filter(row => row.statusOverall.value > 0)

	return (
		<div className={styles.directory}>
			<DataTable
								columns={columns}
								headers={headers}
								rows={rows}
			/>
		</div>
	)
}

*/
