import { PageMargin } from '@/components/PageMargin'
import { Timeline } from './_components/Timeline'
import config from '../../../../content/adopt/gantt/data.json'
import { Metadata } from 'next'

export default function Page() {
  return (
    <PageMargin>
      <h1>Implementation Plan timeline</h1>
      <Timeline rows={config.rows} />
    </PageMargin>
  )
}

export const metadata: Metadata = {
  title: 'ORUK planning timeline'
}
