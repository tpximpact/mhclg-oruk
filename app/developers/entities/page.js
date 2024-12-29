import { PageMargin } from '@/components/PageMargin'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'

import { 
	VersionedDocumentation
} from '@/components/VersionedDocumentation'
import { loadVersionedJsonFiles } from '@/utilities/loadVersionedJsonFiles'
export const metadata = {
	title: 'ORUK Entity relationship diagram'
}

export default function Page() {
	const [allVersions, contentData] = loadVersionedJsonFiles('../content/developers/entities')

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
