import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { VersionedDocumentation } from '@/components/VersionedDocumentation'
import { getVersions } from '@/utilities/versionedContent'

export const metadata = {
	title: 'ORUK API'
}

export default async function Page() {
	const [allVersions, contentData] = getVersions('../content/developers/api')

	return (
		<>
			<NamedMarkdownPage name='api' />
		 	
				<VersionedDocumentation allVersions={allVersions} contentData={contentData} />
	
		</>
	)
}
