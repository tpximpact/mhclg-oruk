import { DynamicSectionListing } from '@/components/DynamicSection'
import { listDynamicSection } from '@/utilities/dynamicSection'
import { PageMargin } from '@/components/PageMargin'

export default function Page() {
	return (
		<PageMargin>
			<DynamicSectionListing
				mainHeading='Updates'
				data={listDynamicSection({
					rootContentFolder: 'updates'
				})}
			/>
		</PageMargin>
	)
}

export const metadata = {
	title: 'News from ORUK'
}
