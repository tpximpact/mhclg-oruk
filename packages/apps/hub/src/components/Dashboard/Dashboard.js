
import styles from './Dashboard.module.css'
import { DataTable } from './DataTable'
import {PaginatedTable} from './PaginatedTable'

import { generate  } from './generateDummyData'

const data = generate({
	rowsPerPage: 10,
	numRows:35,
	failEveryNRows:3
})

export const Dashboard = ({ currentPage }) => {
	const columns = data.definitions.views.dashboard.columns
	const headers = data.definitions.columns
	const showDetails = data.definitions.views.dashboard.showRowDetailsLink
	const detailsURL = data.definitions.detailsURL
	let rows = data.data

	return (
		<div className={styles.dashboard}>

			<h2>Dashboard</h2>
			<PaginatedTable currentPage={currentPage} />

			<DataTable
				columns={columns}
				headers={headers}
				showDetails={showDetails}
				detailsURL={detailsURL}
				rows={rows}
			/>
		</div>
	)
}

export const Directory = () => {
	const columns = data.definitions.views.directory.columns
	const headers = data.definitions.columns
	const showDetails = data.definitions.views.directory.showRowDetailsLink
	const detailsURL = data.definitions.detailsURL
	let rows = data.data

	rows = rows.filter(row => row.statusOverall.value > 0)

	return (
		<div className={styles.directory}>
			<DataTable
				columns={columns}
				headers={headers}
				showDetails={showDetails}
				detailsURL={detailsURL}
				rows={rows}
			/>
		</div>
	)
}


