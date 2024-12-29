import { PageMargin } from '@/components/PageMargin'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'

import { VersionedDocumentation } from '@/components/VersionedDocumentation'
import { getVersions } from '@/utilities/versionedContent'
export const metadata = {
	title: 'ORUK Swagger'
}

export default async function Page() {
	const [allVersions, contentData] = getVersions('../content/developers/api')

	return (
		<>
			<NamedMarkdownPage name='api' />
		 	<PageMargin>
				<VersionedDocumentation allVersions={allVersions} contentData={contentData} />
			</PageMargin>
		</>
	)
}
