import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { VersionedDocumentation } from '@/components/VersionedDocumentation'
import { getVersionedContent } from '@/utilities/getVersionedContent'

export const metadata = {
	title: 'ORUK Entity relationship diagram'
}

export default async function Page() {
	const content = getVersionedContent({
		contentFolder: '../content/developers/entities',
		schemaFolder: '../content/developers/specifications'
	})

	return (
		<>
			<NamedMarkdownPage name='entities' />
			<VersionedDocumentation displayComponentName='RenderDB' content={content} />
		</>
	)
}
