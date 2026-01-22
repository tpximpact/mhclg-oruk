import { SortedAndPaginatedTable } from '@/components/SortedAndPaginatedTable'

interface DashboardProps {
  result: any
  currentPage: any
}

export const Dashboard = ({
  result,
  currentPage /* ,method,endpoint,currentPage*/
}: DashboardProps) => {
  const view = result.result.definitions.views.dashboard

  return <SortedAndPaginatedTable view={view} tableData={result.result} currentPage={currentPage} />
}
