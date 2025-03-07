'use client'

import { useState, useEffect } from 'react'
import { PaginatedTable } from '@/components/PaginatedTable'
import { TableSorting, getSortingOptions, getSortedRows } from '@/components/TableSorting'

export const SortedAndPaginatedTable = ({ currentPage, tableData, view }) => {
	const headers = tableData.definitions.columns
	const [sortBy, setSortBy] = useState(view.defaultSortBy)
	const [sortDirection, setSortDirection] = useState(view.defaultSortDirection)
	const [sortedRows, setSortedRows] = useState(tableData.data)
	const sortingOptions = getSortingOptions(view, tableData)

	const sort = () => {
		const data = JSON.parse(JSON.stringify(tableData))
		let newSortedRows = getSortedRows({
			sortColumn: sortBy,
			data: data,
			sortDirection: sortDirection
		})

		setSortedRows(newSortedRows)
	}

	useEffect(() => {
		sort()
	}, [sortBy, sortDirection])

	const changeSort = newVal => {
		setSortBy(newVal)
	}

	const changeDirection = newVal => {
		setSortDirection(newVal)
		sort()
	}

	return (
		<>
			<TableSorting
				values={sortingOptions}
				selectedValue={sortBy}
				selectedDirection={sortDirection}
				onValueChange={changeSort}
				onDirectionChange={changeDirection}
			/>
			<PaginatedTable
				rowsPerPage={view.rowsPerPage}
				columns={view.columns}
				headers={headers}
				rows={sortedRows}
				currentPage={currentPage}
			/>
		</>
	)
}
