import { DynamicSectionPage } from '@/components/DynamicSection'
import { getDynamicPageContent } from '@/util/dynamicSection'
import { PageMargin } from '@tpx/PageMargin'

const inFolder = 'news'

export default async function Page({ params }) {
	const data = getDynamicPageContent(inFolder, params.slug)
	return (
		<PageMargin>
			<DynamicSectionPage {...data} />
		</PageMargin>
	)
}

export const metadata = {
	title: 'ORUK News'
}
