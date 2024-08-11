import { RemoteJSON, METHOD } from '@/components/RemoteJSON'
import { CONFIG } from '/config'
import { Dashboard } from '@/components/Dashboard'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import meta from '/content/developer/tools/dashboard/metadata.json'
export const metadata = meta

export default async function Page() {
	return (
		<>
			<NamedMarkdownPage name='dashboard' />
			<RemoteJSON
				method={METHOD.GET}
				ResultRenderComponent={Dashboard}
				endpoint={CONFIG.DASHBOARD_ENDPOINT}
			/>
		</>
	)
}
