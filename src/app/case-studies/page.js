import { DynamicSectionListing } from '@/components/DynamicSection'
import { listDynamicSection } from '@/utilities/dynamicSection'
import { PageMargin } from '@/components/PageMargin'

export default function Page() {
	return (
		<PageMargin>
			<DynamicSectionListing
				mainHeading='Case studies'
				data={listDynamicSection({
					rootContentFolder: 'case-studies'
				})}
			/>
		</PageMargin>
	)
}

export const metadata = {
	title: 'Case studies'
}
