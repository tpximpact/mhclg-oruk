import { DynamicSectionPage } from '@/components/DynamicSection'
import { getDynamicPageContent } from '@/utilities/dynamicSection'
import { PageMargin } from '@/components/PageMargin'
import { Metadata } from 'next'

const inFolder = 'about'

interface PageProps {
	params: Promise<{
		slug: string
	}>
}

export default async function Page(props: PageProps) {
	const params = await props.params
	const data = getDynamicPageContent(inFolder, params.slug)
	return (
		<PageMargin>
			<DynamicSectionPage {...data} />
		</PageMargin>
	)
}

export const metadata: Metadata = {
	title: 'About ORUK'
}
