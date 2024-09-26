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
	const [sortBy,setSortBy] = useState('coconut')

	const sortOptions = [
		['grapefruit', 'Grapefruit'],
		['lime', 'Lime'],
		['coconut', 'Coconut'],
		['mango', 'Mango'],
	  ];

const changeSort = newVal => {
	setSortBy(newVal)
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
			rows={data.data}
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
