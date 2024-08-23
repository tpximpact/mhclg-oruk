import { RemoteJSON, METHOD } from '@/components/RemoteJSON'
import { CONFIG } from '/config'
import { Dashboard, Directory } from '@/components/Dashboard'
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
			<h1>Directory</h1>
			<p>This won't go on the same page in the final thing!  Just for developemnt convenience/</p>
			<Directory />
		</>
	)
}
