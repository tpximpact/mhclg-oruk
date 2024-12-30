import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'

import { 
	VersionedDocumentation
} from '@/components/VersionedDocumentation'
import { loadVersionedJsonFiles } from '@/utilities/loadVersionedJsonFiles'
export const metadata = {
	title: 'ORUK Entity relationship diagram'
}

export default function Page() {
	const [allVersions, contentData] = loadVersionedJsonFiles('../content/developers/specifications')

	return (
		<>
			<NamedMarkdownPage name='specifications' />
			
				<VersionedDocumentation 
				allVersions={allVersions} 
				contentData={contentData} 
				displayComponentName="EntityRelationshipDiagram"
				/>
		
		</>
	)
}
