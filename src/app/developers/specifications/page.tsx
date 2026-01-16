import { getAllContentVersions } from '@/utilities/getAllContentVersions'
import { PageMargin } from '@/components/PageMargin'
import { VersionedDocumentation } from '@/components/VersionedDocumentation'
import { loadMarkdownContent } from '@/utilities/loadMarkdownContent'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'ORUK OpenAPI Specification'
}

export default async function Page() {
	const allVersionsContent = loadMarkdownContent('index.md', '/developers/specification')
	const data = getAllContentVersions({
		contentFolder: '/developers/specification',
		specificationFolder: './src/specifications'
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
