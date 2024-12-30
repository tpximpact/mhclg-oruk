import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { VersionedDocumentation } from '@/components/VersionedDocumentation'
import { getVersions } from '@/utilities/versionedContent'
import { getVersionedContent } from '@/utilities/getVersionedContent'

export const metadata = {
	title: 'ORUK API'
}

export default async function Page() {
	const [allVersions, contentData] = getVersions('../content/developers/api')

	const v =getVersionedContent({
		contentFolder: '../content/developers/api',
		schemaFolder: '../content/developers/specifications'
	})
	
	return (
		<>
		{
			JSON.stringify(v)
	}
			<NamedMarkdownPage name='api' />
		 	
				<VersionedDocumentation allVersions={allVersions} contentData={contentData} />
	
		</>
	)
}
