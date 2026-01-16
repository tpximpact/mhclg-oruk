import { getAllContentVersions } from '@/utilities/getAllContentVersions'
import { PageMargin } from '@/components/PageMargin'
import { VersionedDocumentation } from '@/components/VersionedDocumentation'
import { loadMarkdownContent } from '@/utilities/loadMarkdownContent'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'ORUK API'
}

export default async function Page() {
	const allVersionsContent = loadMarkdownContent('index.md', '/developers/api')
	const data = getAllContentVersions({
		contentFolder: '/developers/api',
		specificationFolder: './src/specifications'
	})

	return (
		<PageMargin>
			<VersionedDocumentation
				allVersionsContent={allVersionsContent}
				displayComponentName='APIModel'
				data={data}
			/>
		</PageMargin>
	)
}
