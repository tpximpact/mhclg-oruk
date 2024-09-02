import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'

import { PageMargin } from '@tpx/PageMargin'
export default async function Page() {
	return (
		<PageMargin>
			<NamedMarkdownPage name='not-found' />
		</PageMargin>
	)
}
