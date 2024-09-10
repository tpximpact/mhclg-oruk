import { RemoteJSON, METHOD } from '@/components/RemoteJSON'
import { CONFIG } from '/config'
import { Dashboard } from '@/components/Dashboard'
import { PageMargin } from '@tpx/PageMargin'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
//import meta from '../../../../../../../content/developer/dashboard/metadata.json'
//export const metadata = meta

export default async function Page({ searchParams }) {
	return (
		<>
			<NamedMarkdownPage name='dashboard' />
			<PageMargin>
				<RemoteJSON
					method={METHOD.GET}
					ResultRenderComponent={Dashboard}
					endpoint={CONFIG.DASHBOARD_ENDPOINT}
					currentPage={searchParams.page ? parseInt(searchParams.page) : 1}
				/>
			</PageMargin>
		</>
	)
}
