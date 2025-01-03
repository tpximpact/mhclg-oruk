import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { VersionedDocumentation } from '@/components/VersionedDocumentation'
import { getVersionedContent } from '@/utilities/getVersionedContent'

export const metadata = {
	title: 'ORUK Specification'
}

export default async function Page() {
	const content = getVersionedContent({
		contentFolder: '../content/developers/specifications',
		schemaFolder: '../content/developers/specifications'
	})

	return (
		<>
			<NamedMarkdownPage name='specifications' />
			<VersionedDocumentation displayComponentName='RenderSpecification' content={content} />
		</>
	)
}
