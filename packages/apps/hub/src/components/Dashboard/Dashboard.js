import styles from './Dashboard.module.css'
import { Table } from './Table.js'
import data from '/content/developer/dashboard/data.json'

const headers = [
	'Organisation',
	'API',
	'Endpoint up',
	'Services feed',
	'Searchable',
	'Last checked',
	'Details'
]

export const Dashboard = ({ result }) => (
	<div className={styles.dashboard}>
		<h2>This is dummy data</h2>
		<Table headers={headers} data={data} />
		<h2>This was the response from the server</h2>
		{JSON.stringify(result)}
	</div>
)
