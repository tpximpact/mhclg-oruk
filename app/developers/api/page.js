import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { VersionedDocumentation } from '@/components/VersionedDocumentation'
import { getVersionedContent } from '@/utilities/getVersionedContent'

export const metadata = {
	title: 'ORUK API'
}

export default async function Page() {
	const content = getVersionedContent({
		contentFolder: '../content/developers/api',
		schemaFolder: '../content/developers/specifications'
	})

	return (
		<>
			<NamedMarkdownPage name='api' />
			<VersionedDocumentation displayComponentName='RenderAPI' content={content} />
		</>
	)
}
