import { PageMargin } from '@tpx/PageMargin'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import SwaggerUI from 'swagger-ui-react'
import 'swagger-ui-react/swagger-ui.css'
import './patches.css'
import { VersionedDocumentation } from '@/components/VersionedDocumentation'
import { getVersions } from '@/util/versionedContent'
export const metadata = {
	title: 'ORUK Swagger'
}

export default async function Page() {
	const [allVersions, contentData] = getVersions('../content/developers/api')

	return (
		<>
			<NamedMarkdownPage name='api' />
			<PageMargin>
				<VersionedDocumentation allVersions={allVersions} contentData={contentData} />
			</PageMargin>
			<PageMargin>
				<SwaggerUI url='https://petstore.swagger.io/v2/swagger.json' />
			</PageMargin>
		</>
	)
}
