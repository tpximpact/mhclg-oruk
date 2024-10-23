import { Changelog } from '@/components/Changelog'
import { PageMargin } from '@tpx/PageMargin'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { getChangelogData } from '@/util/changelog'

export const metadata = {
	title: 'ORUK changelog'
}

export default async function Page() {
	const data = getChangelogData()
	return (
		<>
			<NamedMarkdownPage name='changelog' />
			<PageMargin>
				<Changelog versions={data} />
			</PageMargin>
		</>
	)
}
