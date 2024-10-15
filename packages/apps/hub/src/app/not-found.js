import { Sitemap } from '@/components/Sitemap'
import { getSiteItems } from '@/util/content'
import { siteStructureWithFullPaths } from '@/util/menuing'

export default function Page() {
	return <Sitemap data={siteStructureWithFullPaths(getSiteItems())} />
}

export const metadata = {
	title: 'ORUK Technical documentation'
}
