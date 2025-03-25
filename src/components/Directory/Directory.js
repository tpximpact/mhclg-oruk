import { SortedAndPaginatedTable } from '@/components/SortedAndPaginatedTable'

// import { generate } from '@/components/Dashboard'

/*const data = generate({
	rowsPerPage: 10,
	numRows: 35,
	failEveryNRows: 3
})*/

export const Directory = ({ result, currentPage }) => {
	const view = result.result.definitions.views.directory

	return <SortedAndPaginatedTable view={view} tableData={result.result} currentPage={currentPage} />
}
