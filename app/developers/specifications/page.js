import { getAllContentVersions } from '@/utilities/getAllContentVersions'
import { PageMargin } from '@/components/PageMargin'
import { VersionedDocumentation } from '@/components/VersionedDocumentation'
import { loadMarkdownContent } from '@/utilities/loadMarkdownContent'

export const metadata = {
	title: 'ORUK OpenAPI Specification'
}

export default async function Page() {
	const allVersionsContent = loadMarkdownContent('index.md', '/developers/specification')
	const data = getAllContentVersions({
		contentFolder: '/developers/specification',
		specificationFolder: './specifications'
	})

	return (
		<PageMargin>
			<VersionedDocumentation
				allVersionsContent={allVersionsContent}
				displayComponentName='OpenAPIModel'
				data={data}
			/>
		</PageMargin>
	)
}
