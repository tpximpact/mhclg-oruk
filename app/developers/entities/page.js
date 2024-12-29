import { PageMargin } from '@/components/PageMargin'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'

import { 
	VersionedDocumentation
} from '@/components/VersionedDocumentation'
import { getVersions } from '@/utilities/versionedContent'
export const metadata = {
	title: 'ORUK Entity relationship diagram'
}

export default function Page() {
	const [allVersions, contentData] = getVersions('../content/developers/entities')

	return (
		<>
			<NamedMarkdownPage name='entities' />
			<PageMargin>
				<VersionedDocumentation 
				allVersions={allVersions} 
				contentData={contentData} 
				displayComponentName="EntityRelationshipDiagram"
				/>
			</PageMargin>
		</>
	)
}
