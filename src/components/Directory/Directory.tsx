import { SortedAndPaginatedTable } from '@/components/SortedAndPaginatedTable'

// import { generate } from '@/components/Dashboard'

/*const data = generate({
	rowsPerPage: 10,
	numRows: 35,
	failEveryNRows: 3
})*/

interface DirectoryResult {
	result: {
		definitions: {
			columns: Record<string, any>
			views: {
				directory: any
			}
		}
		data: any[]
	}
}

interface DirectoryProps {
	result: DirectoryResult
	currentPage: number
}

export const Directory = ({ result, currentPage }: DirectoryProps) => {
	const view = result.result.definitions.views.directory

	return <SortedAndPaginatedTable view={view} tableData={result.result} currentPage={currentPage} />
}
