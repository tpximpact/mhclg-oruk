import { DynamicSectionPage } from '@/components/DynamicSection'
import { getDynamicPageContent } from '@/utilities/dynamicSection'
import { PageMargin } from '@/components/PageMargin'

const inFolder = 'updates'

export default async function Page(props) {
	const params = await props.params
	const data = getDynamicPageContent(inFolder, params.slug)
	console.log("page")
	console.log(data)
	console.log("/page")
	return (
		<PageMargin>
			<DynamicSectionPage {...data} />
		</PageMargin>
	)
}

export const metadata = {
	title: 'ORUK Update'
}
