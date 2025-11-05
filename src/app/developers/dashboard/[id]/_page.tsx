import { DashboardDetails } from '@/components/DashboardDetails'
import { PageMargin } from '@/components/PageMargin'
import { ServiceRepository } from '@/repositories/service-repository'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: `ORUK data feed report`,
		description: 'Detail view'
	}
}

interface PageProps {
	params: Promise<{ id: string }>
}

export default async function Page(props: PageProps) {
	const params = await props.params
	const serviceId = params.id

	// Fetch service directly from MongoDB
	const repo = new ServiceRepository()
	const service = await repo.findById(serviceId)

	if (!service) {
		notFound()
	}

	// Map service data to DashboardDetails expected structure
	const result = {
		ok: true,
		endpoint: `db:services/${serviceId}`,
		queryParams: { id: serviceId },
		result: {
			title: { value: service.name },
			publisher: { value: service.publisher, url: service.publisherUrl },
			serviceUrl: { value: service.serviceUrl, url: service.serviceUrl },
			isValid: { value: service.status === 'approved' ? 'pass' : 'fail' },
			lastTested: { value: (service.updatedAt || service.createdAt)?.toISOString() },
			payload: [
				{
					label: 'Service Information',
					fields: [
						{
							label: 'Description',
							value: service.description,
							dataType: 'oruk:dataType:string'
						},
						{
							label: 'Developer',
							value: service.developer,
							url: service.developerUrl,
							dataType: 'oruk:dataType:string'
						},
						{
							label: 'Contact Email',
							value: service.contactEmail,
							dataType: 'oruk:dataType:string'
						},
						{
							label: 'Status',
							value: service.status,
							dataType: 'oruk:dataType:string'
						}
					]
				}
			]
		}
	}

	// Add status note section if it exists
	if (service.statusNote) {
		result.result.payload.push({
			label: 'Status Notes',
			fields: [
				{
					label: 'Note',
					value: service.statusNote,
					dataType: 'oruk:dataType:string'
				}
			]
		})
	}

	return (
		<PageMargin>
			<DashboardDetails result={result} />
		</PageMargin>
	)
}
