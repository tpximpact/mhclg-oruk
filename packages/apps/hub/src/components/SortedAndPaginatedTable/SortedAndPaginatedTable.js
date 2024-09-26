
'use client'

import {useState, useEffect} from 'react'
import { PaginatedTable } from '@/components/PaginatedTable'
import { DIRECTION, TableSorting, getSortingOptions, getSortedRows } from '@/components/TableSorting'

export const SortedAndPaginatedTable = ({
	currentPage,
	tableData,
	view
}) => {
	const headers = tableData.definitions.columns
	const [sortBy,setSortBy] = useState(view.defaultSortBy.column)
	const [sortDirection,setSortDirection] = useState(DIRECTION.ASCENDING)
    const [sortedRows,setSortedRows] = useState(tableData.data)
	const sortingOptions = getSortingOptions(view,tableData)
	
const sort = () => {
    alert("sorting by " + sortBy)
    const data = JSON.parse(JSON.stringify(tableData))
    let newSortedRows = getSortedRows(sortBy,data)
        
    if (sortDirection===DIRECTION.DESCENDING) {
            newSortedRows = newSortedRows.reverse()
        }
    setSortedRows(newSortedRows)
}

    useEffect(() => {
     sort()
        
      }, [sortBy, sortDirection]);

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
         selectedDirection = {sortDirection}
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

