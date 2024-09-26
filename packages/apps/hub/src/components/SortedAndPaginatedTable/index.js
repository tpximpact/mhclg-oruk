'use client'

import {useState} from 'react'
import { PaginatedTable } from '@/components/PaginatedTable'
import { TableSorting, getSortingOptions, getSortedRows } from '@/components/TableSorting'

export const SortedAndPaginatedTable = ({
	currentPage,
	tableData,
	view
}) => {
	const headers = tableData.definitions.columns
	const [sortBy,setSortBy] = useState(view.defaultSortBy.column)
	const [sortedRows,setSortedRows] = useState(tableData.data)
	const sortingOptions = getSortingOptions(view,tableData)
	
const changeSort = newVal => {
	setSortBy(newVal)
	let newSortedRows = getSortedRows(newVal,tableData)
	// newSortedRows = newSortedRows.reverse()
	setSortedRows(newSortedRows)
}

	return (
		<>
		<TableSorting 
		 values={sortingOptions}
		 selectedValue={sortBy}
		 onValueChange={changeSort}
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

