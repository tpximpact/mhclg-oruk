import { Sitemap } from '@/components/Sitemap'
import { getRawPageTree } from '@/utilities/getRawPageTree'
import { siteStructureWithFullPaths } from '@/utilities/menuing'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { Banner } from '@/components/Banner'
import { PageMargin } from '@/components/PageMargin'

export const metadata = {
	title: 'Open Referral UK'
}

export default function Page() {
	return (
		<> 
	
			<NamedMarkdownPage name='not-found' />
				<PageMargin>
		<Banner>
		<span style={{
			fontWeight: 700
		}}>We have reorganised our website recently so the content you're looking for may have been moved to a different location. Please use the site map below or return to the <a href='/'>home page.</a></span>
		</Banner>
		</PageMargin>
			<Sitemap showHeading={false} data={siteStructureWithFullPaths(getRawPageTree())} />
		</>
	)
}
