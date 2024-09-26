'use client'

import {useState} from 'react'
import { PaginatedTable } from '@/components/PaginatedTable'
import { TableSorting, getSortingOptions, getSortedRows } from '@/components/TableSorting'
import { generate } from './generateDummyData'


// TODO real data !

const data = generate({
	rowsPerPage: 10,
	numRows: 35,
	failEveryNRows: 3
})

export const Dashboard = ({ currentPage }) => {
	const view = data.definitions.views.dashboard
	const headers = data.definitions.columns
	const [sortBy,setSortBy] = useState(view.defaultSortBy.column)
	const [sortedRows,setSortedRows] = useState(data.data)
	const sortingOptions = getSortingOptions(view,data)
	
const changeSort = newVal => {
	setSortBy(newVal)
	let newSortedRows = getSortedRows(newVal,data)
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
