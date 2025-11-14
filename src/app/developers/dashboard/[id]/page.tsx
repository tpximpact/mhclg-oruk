import { ServiceRepository } from '@/repositories/service-repository'
import { DashboardDetails } from '@/components/DashboardDetails'
import { PageMargin } from '@/components/PageMargin'
import { notFound } from 'next/navigation'
import type { ServiceResponse } from '@/models/service'

interface PageProps {
	params: Promise<{ id: string }>
}

export async function generateMetadata() {
	return {
		title: `ORUK data feed report`,
		description: 'Detail view'
	}
}

// Transform ServiceResponse to match the expected format for DashboardDetails
function transformServiceForDashboard(service: ServiceResponse) {
	return {
		result: {
			title: {
				value: service.name
			},
			publisher: {
				value: service.publisher
			},
			serviceUrl: {
				url: service.serviceUrl,
				value: service.serviceUrl
			},
			isValid: {
				value: service.statusIsValid ? 'Valid' : 'Invalid'
			},
			lastTested: {
				value: service.lastTested?.toISOString() || service.createdAt.toISOString()
			},
			payload: [
				{
					label: 'Service Details',
					fields: [
						{
							label: 'Name',
							value: service.name,
							dataType: 'oruk:dataType:string'
						},
						{
							label: 'Description',
							value: service.description,
							dataType: 'oruk:dataType:string'
						},
						{
							label: 'Developer',
							value: service.developer,
							dataType: 'oruk:dataType:string',
							url: service.developerUrl
						},
						{
							label: 'Publisher URL',
							value: service.publisherUrl,
							dataType: 'oruk:dataType:string',
							url: service.publisherUrl
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
						},
						{
							label: 'Active',
							value: service.active ? 'Yes' : 'No',
							dataType: 'oruk:dataType:string'
						},
						{
							label: 'Created At',
							value: service.createdAt.toISOString(),
							dataType: 'oruk:dataType:dateTime'
						},
						{
							label: 'Updated At',
							value: service.updatedAt.toISOString(),
							dataType: 'oruk:dataType:dateTime'
						}
					]
				}
			]
		}
	}
}

export default async function Page({ params }: PageProps) {
	const { id } = await params
	
	try {
		const serviceRepository = new ServiceRepository()
		const service = await serviceRepository.findById(id)
		
		if (!service) {
			notFound()
		}

		const dashboardData = transformServiceForDashboard(service)

		return (
			<PageMargin>
				<DashboardDetails result={dashboardData} />
			</PageMargin>
		)
	} catch (error) {
		console.error('Error fetching service:', error)
		notFound()
	}
}