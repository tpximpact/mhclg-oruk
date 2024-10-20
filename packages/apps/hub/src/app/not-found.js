import { Sitemap } from '@/components/Sitemap'
import { getSiteItems } from '@/util/content'
import { siteStructureWithFullPaths } from '@/util/menuing'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'

export const metadata = {
	title: 'Open Referral UK'
}

export default function Page() {
	return (
	<>
	<NamedMarkdownPage name='not-found' />
	<Sitemap showHeading={false} data={siteStructureWithFullPaths(getSiteItems())} />
	</>)
}

