import { generate } from './generateDummyData'
import { SortedAndPaginatedTable } from '@/components/SortedAndPaginatedTable'

// TODO real data !

const data = generate({
	rowsPerPage: 10,
	numRows: 35,
	failEveryNRows: 3
})

export const Dashboard = ({ 
	/*result, */
	currentPage /*,method,endpoint,currentPage*/ }) => {
	const view = data.definitions.views.dashboard

	return (
		<>
			<SortedAndPaginatedTable view={view} tableData={data} currentPage={currentPage} />
		</>
	)
}
