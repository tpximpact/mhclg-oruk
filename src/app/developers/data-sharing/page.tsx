import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'

export const metadata = {
	title: 'Understanding Data Sharing'
}

export default async function Page() {
	return <NamedMarkdownPage name='data-sharing' noMargin={undefined} markdownRaw={undefined} />
}
