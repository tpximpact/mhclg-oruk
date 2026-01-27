import { DynamicSectionListing } from '@/components/DynamicSection'
import { listDynamicSection } from '@/utilities/dynamicSection'
import { PageMargin } from '@/components/PageMargin'
import { Metadata } from 'next'

export default function Page() {
  return (
    <PageMargin>
      <DynamicSectionListing
        mainHeading='About ORUK'
        data={listDynamicSection({
          rootContentFolder: 'about'
        })}
      />
    </PageMargin>
  )
}

export const metadata: Metadata = {
  title: 'About from ORUK'
}
