import Link from 'next/link'
import { RemoteJSON, METHOD } from '@/components/RemoteJSON'
import { DashboardDetails } from '@/components/DashboardDetails'
import { CONFIG } from '/config'

export async function generateMetadata() {
	return {
		title: `ORUK dashboard report`,
		description: 'Detail view'
	}
}

export default async function Page({
	params
	// searchParams
}) {
	return (
		<>
			<Link href='/developer/tools/dashboard'>Back to Dashboard</Link>
			<h1>Feed (details view)</h1>
			<RemoteJSON
				method={METHOD.GET}
				ResultRenderComponent={DashboardDetails}
				endpoint={CONFIG.DASHBOARD_DETAILS_ENDPOINT}
				queryParams={{
					id: params.id
				}}
			/>
		</>
	)
}