import { Sitemap } from '@/components/Sitemap'
import { getRawPageTree } from '@/utilities/getRawPageTree'
import { siteStructureWithFullPaths } from '@/utilities/menuing'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'

export const metadata = {
	title: 'Open Referral UK'
}

export default function Page() {
	return (
		<>
			<NamedMarkdownPage name='not-found' />
			<Sitemap showHeading={false} data={siteStructureWithFullPaths(getRawPageTree())} />
		</>
	)
}
