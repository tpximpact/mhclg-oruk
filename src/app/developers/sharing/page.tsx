import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'

export const metadata = {
	title: 'ORUK data sharing'
}

export default async function Page() {
	return <NamedMarkdownPage name='sharing' noMargin={undefined} markdownRaw={undefined} />
}
