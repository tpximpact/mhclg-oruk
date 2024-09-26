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
	const [sortBy,setSortBy] = useState(view.defaultSortBy.column)
	const [sortedRows,setSortedRows] = useState(data.data)

	const sortingOptions = view.sortBy.map(
		(col) => 
			[col,data.definitions.columns[col].label]
	)


const getSortedRows = sortColumn => {
	//alert(sortColumn)
	const compareRows = (a,b) => {
/*
		if (a[sortColumn] && String(a[sortColumn].value)){
			
		} else {
			alert(sortColumn)
			alert (a[sortColumn] && a[sortColumn].value)
			alert(JSON.stringify(a))
			alert(JSON.stringify(a[sortColumn]))
			alert(JSON.stringify(a[sortColumn].value))
		}
			*/


		const valA = String(a[sortColumn].value).toUpperCase(); 
	const valB = String(b[sortColumn].value).toUpperCase(); 
	if (valA < valB) {
	  return -1;
	}
	if (valA > valB) {
	  return 1;
	}
	
	return 0;
	}

	return data.data.sort(compareRows)
}

const changeSort = newVal => {
	setSortBy(newVal)
	let newSortedRows =getSortedRows(newVal)
	// newSortedRows = newSortedRows.reverse()
	setSortedRows(newSortedRows)
}

	return (
		<>
		<Sorting 
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
