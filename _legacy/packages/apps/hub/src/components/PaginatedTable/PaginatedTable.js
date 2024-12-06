'use client'

import React, { useState, useEffect } from 'react'
import { Pagination } from '@/components/Pagination'
import { DataTable } from './DataTable'

export const PaginatedTable = props => {
	const [clientSide, setClientSide] = useState(false)

	useEffect(() => {
		setClientSide(true)
	}, [])

	return clientSide ? <InteractiveView {...props} /> : <NoJSView {...props} />
}

const NoJSView = ({ currentPage, ...props }) => (
	<View
		//title="NoJS"
		currentPage={currentPage}
		{...props}
	/>
)

const InteractiveView = ({ currentPage, ...props }) => {
	const [activePage, setActivePage] = useState(currentPage)

	const selectPage = (_, n) => setActivePage(n)

	return (
		<View
			//title="Interactive"
			pageChangeFunction={selectPage}
			currentPage={activePage}
			{...props}
		/>
	)
}

const calculateNumPages = ({ numRows, rowsPerPage }) => Math.ceil(numRows / rowsPerPage)

const paginateRows = ({ currentPage, rows, rowsPerPage }) => {
	const offset = (currentPage - 1) * rowsPerPage
	return rows.slice(offset, offset + rowsPerPage)
}

const View = ({
	//title,
	pageChangeFunction,
	currentPage,
	rows,
	rowsPerPage,
	...props
}) => {
	const baseUrl = '/developer/tools/dashboard?page='

	const numPages = calculateNumPages({
		numRows: rows.length,
		rowsPerPage: rowsPerPage
	})

	const pagedRows =
		numPages > 1
			? paginateRows({
					currentPage: currentPage,
					rows: rows,
					rowsPerPage: rowsPerPage
				})
			: rows

	return (
		<div>
			{/*<div>
			{title} version. CurrentPage = <strong>{currentPage}</strong>
		</div>*/}
			<DataTable {...props} rows={pagedRows} />
			{numPages > 1 ? (
				<Pagination
					baseUrl={baseUrl}
					numPages={numPages}
					currentPage={currentPage}
					pageChangeFunction={pageChangeFunction}
				/>
			) : null}
		</div>
	)
}

/*

<DataTable
				columns={columns}
				headers={headers}
				showDetails={showDetails}
				detailsURL={detailsURL}
				rows={rows}
			/>
*/
