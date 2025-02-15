import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'

export const metadata = {
	title: 'Technical Overview'
}

export default async function Page() {
	return <NamedMarkdownPage name='overview' />
}
