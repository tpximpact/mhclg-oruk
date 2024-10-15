import { PageMargin } from '@tpx/PageMargin'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'

import { VersionedDocumentation } from '@/components/VersionedDocumentation'
import { getVersions } from '@/util/versionedContent'
export const metadata = {
	title: 'ORUK Entity relationship diagram'
}

export default async function Page() {
	//const allVersions = ["3.0","1.0"]

	const [allVersions, contentData] = getVersions('../content/technical/erd')

	return (
		<>
			<NamedMarkdownPage name='erd' />
			<PageMargin>
				<VersionedDocumentation allVersions={allVersions} contentData={contentData} />
			</PageMargin>
		</>
	)
}
