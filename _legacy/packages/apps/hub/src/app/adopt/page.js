import { DynamicSectionListing } from '@/components/DynamicSection'
import { listDynamicSection } from '@/util/dynamicSection'
import { PageMargin } from '@tpx/PageMargin'

export default function Page() {
	return (
		<PageMargin>
			<DynamicSectionListing
				mainHeading='Adopt the standard'
				data={listDynamicSection({
					rootContentFolder: 'adopt'
				})}
			/>
		</PageMargin>
	)
}

export const metadata = {
	title: 'News from ORUK'
}
