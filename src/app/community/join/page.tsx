import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join the mailing list'
}

export default async function Page() {
  return <NamedMarkdownPage name='join' />
}
