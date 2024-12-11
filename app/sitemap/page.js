import { Sitemap } from '@/components/Sitemap'
import { getRawPageTree } from '@/utilities/getRawPageTree'
import { siteStructureWithFullPaths } from '@/utilities/menuing'

export default function Page() {
	return (<Sitemap showHeading={true} data={siteStructureWithFullPaths(getRawPageTree())} />)
}

export const metadata = {
	title: 'ORUK sitemap'
}
