import styles from './Dashboard.module.css'
import Link from 'next/link'

const formatDate = (dateString) => {
	const options = { hour:"numeric", minute:"numeric", year: "2-digit", month: "2-digit", day: "numeric" }
	return new Date(dateString).toLocaleDateString(undefined, options)
  }

export const Table = ({ headers, data }) => (
	<table className={styles.table}>
		<thead>
			<tr>
				{headers.map((header, idx) => (
					<th key={idx}>{header}</th>
				))}
			</tr>
		</thead>
		<tbody>
			{data.map((row, idx) => (
				<Row key={idx} data={row} />
			))}
		</tbody>
	</table>
)

const Row = ({ data }) => (
	<tr>
		<th>{data.label}</th>
		<td>1.0</td>
		<td>{data.isUp ? 'pass' : 'fail'}</td>
		<td>{data.isServicesValid ? 'pass' : 'fail'}</td>
		<td>{data.isSearchEnabled ? 'pass' : 'fail'}</td>
		<td>{formatDate(data.lastCheck)}</td>

		<td>
			<Link href={data.label}>details</Link>
		</td>
	</tr>
)
