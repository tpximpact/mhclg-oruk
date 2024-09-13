import styles from './Dashboard.module.css'
import Link from 'next/link'
import Icon from '@tpx/Icon'
import { STATUS, getColourForStatus, getIconForStatus } from '@/util/status'

const formatDate = dateString => {
	const options = {
		hour: 'numeric',
		minute: 'numeric',
		year: '2-digit',
		month: '2-digit',
		day: 'numeric'
	}
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

const StatusReadout = ({ pass }) => {
	const status = pass ? STATUS.PASS : STATUS.FAIL
	return (
		<>
			<span style={{ marginRight: '0.2rem' }}>
				<Icon
					colour={getColourForStatus(status)}
					weight='4'
					icon={getIconForStatus(status)}
					size='18'
				/>
			</span>
			{status}
		</>
	)
}

const Row = ({ data }) => {
	const detailsURL = `/developer/tools/dashboard/${data.id}`
	return (
		<tr>
			<th>{data.label}</th>
			<td>1.0</td>
			<td>
				<StatusReadout pass={data.isUp} />
			</td>
			<td>
				<StatusReadout pass={data.isServicesValid} />
			</td>
			<td>
				<StatusReadout pass={data.isSearchEnabled} />
			</td>
			<td>{formatDate(data.lastCheck)}</td>

			<td>
				<Link href={detailsURL}>details</Link>
			</td>
		</tr>
	)
}
