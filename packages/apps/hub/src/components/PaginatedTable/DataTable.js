import Link from 'next/link'
import Icon, { ICON_TYPE } from '@tpx/Icon'
import { STATUS, getColourForStatus, getIconForStatus } from '@/util/status'
import { formatDate } from './formatDate'
import styles from './DataTable.module.css'

export const DataTable = ({ columns, headers, rows }) => (
	<Table>
		<Thead>
			<Tr>
				{columns.map(col => {
					const dataType = headers[col].dataType
					const header = headers[col]
					return (
						<Th className={getCellClassFordataType(dataType)} key={col}>
							{header.label}
						</Th>
					)
				})}
			</Tr>
		</Thead>

		<Tbody>
			{rows.map((row, i) => (
				<Tr key={i}>
					{columns.map((column, j) => {
						const dataType = headers[column].dataType
						const Component = j === 0 ? Th : Td
						const cellProps = j === 0 ? { column: 'false' } : {}
						return (
							<Component key={j} className={getCellClassFordataType(dataType)} {...cellProps}>
								<CellContent
									dataType={dataType}
									label={headers[column].label}
									payload={row[column]}
								/>
							</Component>
						)
					})}
				</Tr>
			))}
		</Tbody>
	</Table>
)

const Table = ({ children, className, ...props }) => (
	<div role='table' className={`${styles.table} ${className}`} {...props}>
		{children}
	</div>
)
const Thead = ({ children, className, ...props }) => (
	<div role='rowgroup' className={`${styles.thead} ${className}`} {...props}>
		{children}
	</div>
)
const Tbody = ({ children, className, ...props }) => (
	<div role='rowgroup' className={`${styles.tbody} ${className}`} {...props}>
		{children}
	</div>
)
const Tr = ({ children, className, ...props }) => (
	<div role='row' className={`${styles.tr} ${className}`} {...props}>
		{children}
	</div>
)
const Th = ({ children, className, column, ...props }) => (
	<div
		role={column ? 'columnheader' : 'rowheader'}
		className={`${styles.th} ${className}`}
		{...props}
	>
		{children}
	</div>
)
const Td = ({ children, className, ...props }) => (
	<div role='cell' className={`${styles.td} ${className}`} {...props}>
		{children}
	</div>
)

const getCellClassFordataType = dataType => {
	let result
	switch (dataType) {
		case 'oruk:dataType.string':
			result = styles.string
			break
		case 'oruk:dataType.numeric':
			result = styles.numeric
			break
		case 'oruk:dataType.success':
			result = null
			break
		case 'oruk:dataType.dateTime':
			result = styles.date
			break
	}
	return <>{result}</>
}

const DisplayDate = ({ d }) => <span suppressHydrationWarning>{formatDate(d)}</span>

const truncate = (str, numWords) => {
	let truncated = str.split(' ').splice(0, numWords).join(' ')
	if (truncated.length < str.length) {
		truncated = truncated + '…'
	}
	return truncated
}

const MAX_TEXT_LENGTH_WORDCOUNT = 20

const CellContent = ({ dataType, label, payload }) => {
	let result

	let val = payload.value
	const target = payload.url

	// if the payload doesnt have a value
	// but does have a url, use that as the value
	if (val === undefined && target) {
		val = <span className={styles.url}>{target}</span>
	}

	// TODO link the links.
	switch (dataType) {
		case 'oruk:dataType.markdown':
			result = <span className={styles.markdown}>{truncate(val, MAX_TEXT_LENGTH_WORDCOUNT)}</span>
			break
		case 'oruk:dataType.string':
			result = val
			break
		case 'oruk:dataType.numeric':
			result = val
			break
		case 'oruk:dataType.success':
			result = <StatusReadout pass={val} />
			break
		case 'oruk:dataType.dateTime':
			result = <DisplayDate d={val} />
			break
	}
	const str = (
		<>
			<span className={styles.label}>{label}</span>
			<span>{result}</span>
		</>
	)
	if (target) {
		const offsite = target.startsWith('http')
		if (offsite) {
			return (
				<a
					href={target}
					className={offsite ? styles.offsiteLink : null}
					target={offsite ? '_blank' : '_self'}
				>
					{str}
					{offsite ? <OffsiteIcon /> : null}
				</a>
			)
		} else {
			return <Link href={target}>{str}</Link>
		}
	} else {
		return str
	}
}

const OffsiteIcon = () => (
	<span style={{ marginLeft: '0.2rem' }}>
		<Icon weight='2' icon={ICON_TYPE.NEWWINDOW} size='18' />
	</span>
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
