import styles from './Dashboard.module.css'
import { Table } from './Table.js'

const headers = [
	'Organisation',
	'API',
	'Endpoint up',
	'Services feed',
	'Searchable',
	'Last checked',
	'Details'
]

export const Dashboard = ({ data }) => (
	<div className={styles.dashboard}>
		<Table headers={headers} data={data} />
	</div>
)
