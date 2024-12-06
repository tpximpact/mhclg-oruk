import { SortedAndPaginatedTable } from '@/components/SortedAndPaginatedTable'

export const Dashboard = ({
	result, 
	currentPage /* ,method,endpoint,currentPage*/
}) => {
	const view = result.result.definitions.views.dashboard

	return (
		

			<SortedAndPaginatedTable view={view} tableData={result.result} currentPage={currentPage} />
		
	)
}
