import { PageMargin } from '@tpx/PageMargin'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'

import { VersionedDocumentation } from '@/components/VersionedDocumentation'
import { getVersions } from '@/util/versionedContent'
export const metadata = {
	title: 'ORUK Swagger'
}

export default async function Page() {
	const [allVersions, contentData] = getVersions('../content/technical/api')

	return (
		<>
			<NamedMarkdownPage name='api' />
			<PageMargin>
				<VersionedDocumentation allVersions={allVersions} contentData={contentData} />
			</PageMargin>
		</>
	)
}
