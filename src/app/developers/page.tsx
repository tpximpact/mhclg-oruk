import { GenericPage } from '@/components/GenericPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Developer resources'
}

export default async function Page() {
  return <GenericPage name='developers' />
}
