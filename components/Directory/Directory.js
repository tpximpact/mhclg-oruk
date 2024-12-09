import { SortedAndPaginatedTable } from '@/components/SortedAndPaginatedTable'

import { generate } from '@/components/Dashboard'

// TODO real data !

const data = generate({
	rowsPerPage: 10,
	numRows: 35,
	failEveryNRows: 3
})

export const Directory = props => {
	const view = data.definitions.views.directory

	return <SortedAndPaginatedTable view={view} tableData={data} {...props} />
}
