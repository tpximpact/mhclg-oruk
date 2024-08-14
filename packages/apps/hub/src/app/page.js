import { PageMargin } from '@tpx/PageMargin'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'

export const metadata = {
	title: 'Open Referral UK'
}

export default function Home() {
	return (
		<PageMargin>
			<NamedMarkdownPage name='home' />
		</PageMargin>
	)
}
