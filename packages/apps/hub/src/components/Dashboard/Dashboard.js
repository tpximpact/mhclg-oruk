'use client'

import {useState} from 'react'
import { PaginatedTable } from '@/components/PaginatedTable'
import { generate } from './generateDummyData'
import sort from './Sorting.module.css'


// TODO real data !

const data = generate({
	rowsPerPage: 10,
	numRows: 35,
	failEveryNRows: 3
})

export const Dashboard = ({ currentPage }) => {
	const view = data.definitions.views.dashboard
	const headers = data.definitions.columns
	const [sortBy,setSortBy] = useState(view.defaultSortBy.value)
	const [sortedRows,setSortedRows] = useState(data.data)

	const sortOptions = view.sortBy.map(
		(col) => 
			[col,data.definitions.columns[col].label]
	)

const compareRows = (a,b) => {
	const valA = a.name.value.toUpperCase(); 
const valB = b.name.value.toUpperCase(); 
if (valA < valB) {
  return -1;
}
if (valA > valB) {
  return 1;
}

return 0;
}

const changeSort = newVal => {
	setSortBy(newVal)
	let newSortedRows = data.data.sort(compareRows)
	// newSortedRows = newSortedRows.reverse()
	setSortedRows(newSortedRows)
}

	return (
		<>
		{sortBy}
		<Sorting 
		 values={sortOptions}
		 selectedValue="lime"
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

const Sorting = ({
	values, 
	onValueChange, 
	selectedValue, 
	...rest
}) => {
	return <div  className={sort.sorting}>
		<label for="sortBy">Sort by... </label>

		<select
      defaultValue={selectedValue}
      onChange={({ target: { value } }) => onValueChange(value)}
      {...rest}
    >
      {values.map(([value, text]) => (
        <option key={value} value={value}>
          {text}
        </option>
      ))}
    </select>
	</div>
}

/*
export const Directory = () => {
	const columns = data.definitions.views.directory.columns
	const headers = data.definitions.columns
	let rows = data.data

	rows = rows.filter(row => row.statusOverall.value > 0)

	return (
		<div className={styles.directory}>
			<DataTable
								columns={columns}
								headers={headers}
								rows={rows}
			/>
		</div>
	)
}

*/
