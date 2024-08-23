import styles from './Dashboard.module.css'
import data from '/content/developer/dashboard/static.json'
import Link from 'next/link'
import Icon from '@tpx/Icon'
import { STATUS, getColourForStatus, getIconForStatus } from '@/util/status'

const View = ({ columns, headers, showDetails, detailsURL, rows }) => (
	<Table>
		<Thead>
			<Tr>
				{columns.map(col => {
					const valueType = headers[col].valueType
					const header = headers[col]
					return (
						<Th className={getCellClassForValueType(valueType)} key={col}>
							{header.label}
						</Th>
					)
				})}
				{showDetails && <Th>Details</Th>}
			</Tr>
		</Thead>

		<Tbody>
			{rows.map((row, i) => (
				<Tr key={i}>
					{columns.map((column, j) => {
						const valueType = headers[column].valueType
						const Component = j === 0 ? Th : Td
						const cellProps = j === 0 ? {column:"false"} : {}
						return (
							<Component key={j} className={getCellClassForValueType(valueType)}
							{...cellProps}>
								<CellContent valueType={valueType} label={headers[column].label} payload={row[column]} />
							</Component>
						)
					})}
					{showDetails && (
						<Td>
							<Link href={detailsURL + row.id}>details</Link>
						</Td>
					)}
				</Tr>
			))}
		</Tbody>
	</Table>
)

export const Dashboard = (
	{
		/* result */
	}
) => {
	const columns = data.definitions.views.dashboard.columns
	const headers = data.definitions.columns
	const showDetails = data.definitions.views.dashboard.showRowDetailsLink
	const detailsURL = data.definitions.detailsURL
	let rows = data.data

	return (
		<div className={styles.dashboard}>
			<h2>Dashboard</h2>
			<View
				columns={columns}
				headers={headers}
				showDetails={showDetails}
				detailsURL={detailsURL}
				rows={rows}
			/>
		</div>
	)
}

export const Directory = (
	{
		/* result */
	}
) => {
	const columns = data.definitions.views.directory.columns
	const headers = data.definitions.columns
	const showDetails = data.definitions.views.directory.showRowDetailsLink
	const detailsURL = data.definitions.detailsURL
	let rows = data.data

	rows = rows.filter(row => row.statusOverall > 0)

	return (
		<div className={styles.directory}>
			<View
				columns={columns}
				headers={headers}
				showDetails={showDetails}
				detailsURL={detailsURL}
				rows={rows}
			/>
		</div>
	)
}
 
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

const getCellClassForValueType = valueType => {
	let result
	switch (valueType) {
		case 'oruk:valueType.uri':
			result = styles.uri
			break
		case 'oruk:valueType.string':
			result = styles.string
			break
		case 'oruk:valueType.numeric':
			result = styles.numeric
			break
		case 'oruk:valueType.success':
			result = null
			break
		case 'oruk:valueType.dateTime':
			result = styles.date
			break
	}
	return <>{result}</>
}

const CellContent = ({ valueType, label, payload }) => {
	let result

	switch (valueType) {
		case 'oruk:valueType.uri':
			result = payload
			break
		case 'oruk:valueType.string':
			result = payload
			break
		case 'oruk:valueType.numeric':
			result = payload
			break
		case 'oruk:valueType.success':
			result = <StatusReadout pass={payload} />
			break
		case 'oruk:valueType.dateTime':
			result = formatDate(payload)
			break
	}
	return <><span className={styles.label}>{label}</span><span>{result}</span></>
}

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


const Table = ({ children, className,  ...props }) => 
	<div role="table" className={`${styles.table} ${className}`} {...props}>
		{children}
	</div>
const Thead = ({ children, className, ...props }) =>
	<div role="rowgroup"  className={`${styles.thead} ${className}`} {...props}>
		{children}
	</div>
const Tbody = ({ children, className, ...props }) =>
	<div role="rowgroup"  className={`${styles.tbody} ${className}`} {...props}>
		{children}
	</div>
const Tr = ({ children, className, ...props }) =>
	<div role="row" className={`${styles.tr} ${className}`} {...props}>
		{children}
	</div>
const Th = ({ children, className, column, ...props }) =>
	<div role={column?"columnheader":"rowheader"}
	className={`${styles.th} ${className}`} {...props}>
		{children}
	</div>
const Td = ({ children, className, ...props }) =>
	<div role="cell" className={`${styles.td} ${className}`} {...props}>
		{children}
	</div>
