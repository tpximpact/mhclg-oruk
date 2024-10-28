import { Sitemap } from '@/components/Sitemap'
import { getSiteItems } from '@/util/getSiteItems'
import { siteStructureWithFullPaths } from '@/util/menuing'

export default function Page() {
	return <Sitemap data={siteStructureWithFullPaths(getSiteItems())} />
}

export const metadata = {
	title: 'ORUK sitemap'
}
