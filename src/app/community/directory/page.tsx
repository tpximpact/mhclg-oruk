import { Directory } from '@/components/Directory'
import { ServiceRepository } from '@/repositories/service-repository'
import sharedDefinitions from '@/components/Dashboard/sharedDefinitions.json'
//import { generate } from '@/components/Dashboard'
import { PageMargin } from '@/components/PageMargin'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'ORUK directory'
}

interface PageProps {
	searchParams: Promise<{ page?: string }>
}

export default async function Page(props: PageProps) {
	const searchParams = await props.searchParams
	// server-side: fetch services directly from the database via repository
	const currentPage = searchParams.page ? parseInt(searchParams.page) : 1

	const repo = new ServiceRepository()
	const services = await repo.find()

	// Map services into the dashboard/table shape expected by Directory/SortedAndPaginatedTable
	const rows = services.map(s => ({
		name: { value: s.name, url: s.updateLink },
		publisher: { value: s.publisher, url: s.publisherUrl },
		comment: { value: s.description },
		developer: { value: s.developer, url: s.developerUrl },
		service: { value: s.serviceUrl, url: s.serviceUrl },
		testDate: { value: (s.updatedAt || s.createdAt)?.toISOString(), url: s.updateLink }
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
			<NamedMarkdownPage autoMenu={false} name='directory' noMargin={undefined} markdownRaw={undefined} />
			<PageMargin>
				<Directory result={resultWrapper} currentPage={currentPage} />
			</PageMargin>
		</>
	)
}
