import { DynamicSectionPage } from '@/components/DynamicSection'
import { getDynamicPageContent } from '@/utilities/dynamicSection'
import { PageMargin } from '@/components/PageMargin'

const inFolder = 'case-studies'

export default async function Page(props) {
	const params = await props.params
	const data = getDynamicPageContent(inFolder, params.slug)
	return (
		<PageMargin>
			<DynamicSectionPage {...data} />
		</PageMargin>
	)
}

export const metadata = {
	title: 'ORUK Case study'
}
