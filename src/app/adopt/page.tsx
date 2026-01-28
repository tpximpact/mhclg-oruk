import { DynamicSectionListing } from '@/components/DynamicSection'
import { listDynamicSection } from '@/utilities/dynamicSection'
import { PageMargin } from '@/components/PageMargin'
import { Metadata } from 'next'

export default function Page() {
  const data = [
    {
      title: 'How to adopt the ORUK standard',
      path: 'how-to-adopt-the-oruk-standard',
      slug: 'A quick guide to adopting the ORUK standard.'
    },
    {
      title: 'Open Referral UK use cases',
      path: 'use-cases',
      slug: 'Explore practical applications and benefits of sharing data using the Open Referral UK standard.'
    },
    ...listDynamicSection({
      rootContentFolder: 'adopt'
    })
  ]

  return (
    <PageMargin>
      <DynamicSectionListing mainHeading='Adopt the standard in a council' data={data} />
    </PageMargin>
  )
}

export const metadata: Metadata = {
  title: 'News from ORUK'
}
