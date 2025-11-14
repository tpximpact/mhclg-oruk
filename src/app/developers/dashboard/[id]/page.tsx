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
function transformServiceForDashboard(service: any) {

  // Helper function to extract value from structured objects
  const extractValue = (field: any): any => {
    if (field === null || field === undefined) return ''
    if (typeof field === 'object' && field.value !== undefined) {
      return field.value
    }
    return field
  }

  // Helper function to safely convert dates to ISO strings (for server-side use)
  const toISOString = (date: any): string => {
    const dateValue = extractValue(date)

    if (!dateValue) return new Date().toISOString()

    try {
      // Handle various date formats
      if (dateValue instanceof Date) {
        return dateValue.toISOString()
      }

      if (typeof dateValue === 'string') {
        const parsed = new Date(dateValue)
        if (isNaN(parsed.getTime())) {
          return new Date().toISOString()
        }
        return parsed.toISOString()
      }

      // Handle MongoDB date objects
      if (typeof dateValue === 'object' && dateValue.$date) {
        return new Date(dateValue.$date).toISOString()
      }

      // Try to parse as date
      const parsed = new Date(dateValue)
      if (isNaN(parsed.getTime())) {
        return new Date().toISOString()
      }
      return parsed.toISOString()
    } catch (error) {
      return new Date().toISOString()
    }
  }

  return {
    result: {
      title: {
        value: extractValue(service.name)
      },
      publisher: {
        value: (service.publisher as any).value,
        url: (service.publisher as any).url
      },
      developer: {
        value: (service.developer as any).value,
        url: (service.developer as any).url
      },
      serviceUrl: {
        url: extractValue(service.serviceUrl),
        value: extractValue(service.serviceUrl)
      },
      isValid: {
        value: extractValue(service.statusIsValid) ? 'Valid' : 'Invalid'
      },
      lastTested: {
        value: service.lastTested ? toISOString(service.lastTested) : toISOString(service.createdAt)
      },
      payload: [
        {
          label: 'Service Details',
          fields: [
            {
              label: 'Name',
              value: extractValue(service.name),
              dataType: 'oruk:dataType:string'
            },
            {
              label: 'Description',
              value: extractValue(service.description),
              dataType: 'oruk:dataType:string'
            },
            ...(service.comment ? [{
              label: 'Comment',
              value: extractValue(service.comment),
              dataType: 'oruk:dataType:string'
            }] : []),
            {
              label: 'Developer',
              value: extractValue(service.developer),
              dataType: 'oruk:dataType:string',
              url: extractValue(service.developerUrl)
            },
            {
              label: 'Publisher URL',
              value: extractValue(service.publisherUrl),
              dataType: 'oruk:dataType:string',
              url: extractValue(service.publisherUrl)
            },
            {
              label: 'Contact Email',
              value: extractValue(service.contactEmail),
              dataType: 'oruk:dataType:string'
            },
            {
              label: 'Status',
              value: extractValue(service.status),
              dataType: 'oruk:dataType:string'
            },
            {
              label: 'Active',
              value: extractValue(service.active) ? 'Yes' : 'No',
              dataType: 'oruk:dataType:string'
            },
            ...(service.testDate
              ? [
                  {
                    label: 'Test Date',
                    value: toISOString(service.testDate),
                    dataType: 'oruk:dataType:dateTime'
                  }
                ]
              : []),
            {
              label: 'Created At',
              value: toISOString(service.createdAt),
              dataType: 'oruk:dataType:dateTime'
            },
            {
              label: 'Updated At',
              value: toISOString(service.updatedAt),
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
}
