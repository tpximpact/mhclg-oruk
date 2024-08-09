import { Homepage } from '@/components/Homepage'
import { PageMargin } from '@tpx/PageMargin'

export const metadata = {
	title: 'Open Referral UK'
}

export default function Home() {
	return (
		<PageMargin>
			<Homepage contentName='home' />
		</PageMargin>
	)
}
