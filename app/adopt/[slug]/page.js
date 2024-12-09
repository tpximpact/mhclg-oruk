import { DynamicSectionPage } from '@/components/DynamicSection'
import { getDynamicPageContent } from '@/utilities/dynamicSection'
import { PageMargin } from '@/components/PageMargin'

const inFolder = 'adopt'

export default async function Page({ params }) {
	const data = getDynamicPageContent(inFolder, params.slug)
	return (
		<PageMargin>
			<DynamicSectionPage {...data} />
		</PageMargin>
	)
}

export const metadata = {
	title: 'ORUK Update'
}
