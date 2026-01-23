import { Changelog } from './_components/Changelog'
import { PageMargin } from '@/components/PageMargin'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { getChangelogData } from '@/utilities/changelog'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ORUK changelog'
}

export default async function Page() {
  const data = getChangelogData()
  return (
    <>
      <NamedMarkdownPage name='changelog' />
      <PageMargin>
        <Changelog versions={data} />
      </PageMargin>
    </>
  )
}
