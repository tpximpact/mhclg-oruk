import { DynamicSectionListing } from '@/components/DynamicSection'
import { listDynamicSection } from '@/util/dynamicSection'
import { PageMargin } from '@tpx/PageMargin'

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
