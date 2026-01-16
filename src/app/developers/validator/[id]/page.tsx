import { RemoteJSON, METHOD } from '@/components/RemoteJSON'
import { ValidatorResult, ValidatorResultPageTitle } from '@/components/ValidatorResult'
import { PageMargin } from '@/components/PageMargin'
import { Suspense } from 'react'
import { getAllContentVersions } from '@/utilities/getAllContentVersions'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { Metadata } from 'next'

interface PageProps {
  params: Promise<{
    uri: any
    id: string
  }>
  searchParams: Promise<{
    uri?: string
  }>
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params
  return {
    title: `ORUK validation report: ${params.uri}`,
    description: 'Report of compliance of the Openreferral feed at ${params.uri}'
  }
}

export default async function Page(props: PageProps) {
  const searchParams = await props.searchParams
  const apiData = getAllContentVersions({
    contentFolder: '/developers/api',
    specificationFolder: './src/specifications'
  })

  return (
    <>
      <PageMargin>
        <ValidatorResultPageTitle />
        <Suspense>
          <RemoteJSON
            method={METHOD.POST}
            RetryComponent={() => (
              <div style={{ paddingTop: '2rem' }}>
                <NamedMarkdownPage
                  noMargin={true}
                  name='results'
                  autoMenu={false}
                  markdownRaw={undefined}
                />
              </div>
            )}
            ResultRenderComponent={ValidatorResult}
            endpoint={process.env.VALIDATOR_ENDPOINT}
            queryParams={{
              serviceUrl: searchParams.uri
            }}
            apiData={apiData}
          />
        </Suspense>
      </PageMargin>
    </>
  )
}
