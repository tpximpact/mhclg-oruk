import { ServiceRepository } from '@/repositories/service-repository'
import { DashboardDetails } from '@/components/DashboardDetails'
import { PageMargin } from '@/components/PageMargin'
import { notFound } from 'next/navigation'

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
      publisher: service.publisher,
      developer: service.developer,
      service: {
        url: (service.service as any).url,
        value: (service.name as any).value
      },
      isValid: service.statusIsValid,
      lastTested: {
        value: service.lastTested ? toISOString(service.lastTested) : toISOString(service.createdAt)
      },
      payload: [
        {
          label: 'Service Details',
          fields: [
            {
              label: 'Name',
              value: service.name.value,
              dataType: 'oruk:dataType:string',
              url: service.service.url
            },
            {
              label: 'Developed By',
              value: service.developer.value,
              dataType: 'oruk:dataType:string',
              url: service.developer.url
            },
            {
              label: 'Published By',
              value: service.publisher.value,
              dataType: 'oruk:dataType:string',
              url: service.publisher.url
            },
            {
              label: 'Comment',
              value: service.comment.value,
              dataType: 'oruk:dataType:string'
            },
            {
              label: 'Description',
              value: service.description.value,
              dataType: 'oruk:dataType:string'
            },
            {
              label: 'Schema Version',
              value: service.schemaVersion,
              dataType: 'oruk:dataType:string'
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
