import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'

import { PageMargin } from '@tpx/PageMargin'

export const metadata = {
	title: 'Error: Not found (404)'
}

export default async function Page() {
	return (
		<PageMargin>
			<NamedMarkdownPage name='not-found' />
		</PageMargin>
	)
}
