import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { PageMargin } from '@/components/PageMargin'
import { PDFBanner } from '@/components/DynamicSection'

export const metadata = {
	title: 'Technical Overview'
}

export default async function Page() {
	return <>
	<PageMargin>
	<PDFBanner pdf="/pdf/ORUK_Technical_overview.pdf" />
	</PageMargin>
	<NamedMarkdownPage name='overview' />
	</>
}
