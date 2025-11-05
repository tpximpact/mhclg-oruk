import { Dashboard } from '@/components/Dashboard'
import { PageMargin } from '@/components/PageMargin'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { ServiceRepository } from '@/repositories/service-repository'
import sharedDefinitions from '@/components/Dashboard/sharedDefinitions.json'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ORUK verified feed availabilty',
}

interface PageProps {
  searchParams: Promise<{ page?: string }>
}

export default async function Page(props: PageProps) {
  const searchParams = await props.searchParams
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1

  // Fetch services directly from MongoDB
  const repo = new ServiceRepository()
  const services = await repo.find()

  // Map to dashboard view shape expected by DataTable
  const rows = services.map(s => ({
    name: { value: s.name, url: `/developers/dashboard/${s.id}` },
    statusOverall: { value: s.status === 'approved' },
    statusIsUp: { value: true },
    statusIsValid: { value: s.status === 'approved' },
    schemaVersion: { value: '3.0' },
    testDate: { value: (s.updatedAt || s.createdAt)?.toISOString(), url: `/developers/dashboard/${s.id}` },
  }))

  const tableData = {
    definitions: sharedDefinitions,
    data: rows,
  }

  const resultWrapper = {
    ok: true,
    endpoint: 'db:services',
    queryParams: { page: currentPage },
    result: tableData,
  }

  return (
    <>
      <NamedMarkdownPage autoMenu={false} name="dashboard" noMargin={undefined} markdownRaw={undefined} />
      <PageMargin>
        <Dashboard result={resultWrapper} currentPage={currentPage} />
      </PageMargin>
    </>
  )
}
