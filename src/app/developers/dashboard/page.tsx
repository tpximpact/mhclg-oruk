import { PageMargin } from '@/components/PageMargin'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { ServiceRepository } from '@/repositories/service-repository'
import type { Metadata } from 'next'
import { DashboardTable } from '@/components/DashboardTable'

export const metadata: Metadata = {
  title: 'ORUK verified feed availabilty'
}

interface PageProps {
  searchParams: Promise<{
    page?: string
    sort?: string
    direction?: string
  }>
}

export default async function Page(props: PageProps) {
  const searchParams = await props.searchParams
  // server-side: fetch services directly from the database via repository
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1

  // Fetch services directly from MongoDB
  const repo = new ServiceRepository()
  const activeServices = await repo.find({ active: true })

  // Map to dashboard view shape expected by DataTable
  const serviceData = activeServices.map(s => {
    const getName = () => {
      if (typeof s.name === 'string') return s.name
      if (s.name && typeof s.name === 'object' && 'value' in s.name)
        return String((s.name as any).value)
      return s.name ? String(s.name) : 'N/A'
    }

    const getTestDate = () => {
      // Try different date field names and formats
      const dateValue = s.updatedAt || s.createdAt || (s as any).testDate || (s as any).lastTested

      if (!dateValue) return 'Never tested'

      // Handle the complex object structure from database
      if (typeof dateValue === 'object' && dateValue !== null) {
        // Handle the specific structure: { _id, label, dataType, value, url, description, name }
        if ('value' in dateValue && dateValue.value) {
          try {
            const dateString = String(dateValue.value)
            return new Date(dateString).toLocaleString('en-GB')
          } catch (error) {
            //console.warn('Failed to parse date from object value:', dateValue.value)
            return 'Invalid date'
          }
        }
        // Handle Date objects or objects with toISOString
        if ('toISOString' in dateValue) {
          try {
            return new Date((dateValue as any).toISOString()).toLocaleString('en-GB')
          } catch (error) {
            return 'Invalid date'
          }
        }
        // If it's an object but doesn't match expected structure
        //console.warn('Unexpected date object structure:', dateValue)
        return 'Unknown date format'
      }

      // Handle simple string or Date values
      try {
        if (typeof dateValue === 'string') {
          return new Date(dateValue).toLocaleString('en-GB')
        }
        if (typeof dateValue === 'object' && (dateValue as any) instanceof Date) {
          return (dateValue as Date).toLocaleString('en-GB')
        }
        return String(dateValue)
      } catch (error) {
        return 'Invalid date'
      }
    }

    return {
      name: { value: getName(), url: String((s.service as any).url) || s.serviceUrl },
      statusOverall: { value: s.statusOverall },
      statusIsUp: { value: s.statusIsUp },
      statusIsValid: { value: s.statusIsValid },
      schemaVersion: { value: String(s.schemaVersion || 'N/A') },
      testDate: { value: getTestDate(), url: `/developers/dashboard/${s.id}` }
    }
  })

  return (
    <>
      <NamedMarkdownPage
        autoMenu={false}
        name='dashboard'
        noMargin={undefined}
        markdownRaw={undefined}
      />
      <PageMargin>
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
            Service Directory
          </h2>
          <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
            Browse and search through registered ORUK services. Click on any service name or
            publisher to view more details.
          </p>
        </div>
        <DashboardTable services={serviceData} currentPage={currentPage} itemsPerPage={10} />
      </PageMargin>
    </>
  )
}
