import { getAllContentVersions } from '@/utilities/getAllContentVersions'
import { PageMargin } from '@/components/PageMargin'
import { VersionedDocumentation } from '@/components/VersionedDocumentation'
import { loadMarkdownContent } from '@/utilities/loadMarkdownContent'

export const metadata = {
	title: 'ORUK data model'
}

export default async function Page() {
	const allVersionsContent = loadMarkdownContent('index.md', '/developers/schemata')
	const data = getAllContentVersions({
		contentFolder: '/developers/schemata',
		specificationFolder: './specifications'
	})

	return (
		<PageMargin>
			<VersionedDocumentation
				allVersionsContent={allVersionsContent}
				displayComponentName='DataModel'
				data={data}
			/>
		</PageMargin>
	)
}
