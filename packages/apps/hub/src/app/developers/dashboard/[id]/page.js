import Link from 'next/link'
import { RemoteJSON, METHOD } from '@/components/RemoteJSON'
import { DashboardDetails } from '@/components/DashboardDetails'
import { PageMargin } from '@tpx/PageMargin'

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
		<PageMargin>
			<div style={{ marginBottom: '2rem' }}>
				<Link href='/developers/tools/dashboard'>Back to dashboard</Link>
			</div>
			<h1 style={{ marginBottom: '2rem' }}>Feed (details view)</h1>
			<RemoteJSON
				method={METHOD.GET}
				ResultRenderComponent={DashboardDetails}
				endpoint={process.env.DASHBOARD_DETAILS_ENDPOINT}
				queryParams={{
					id: params.id
				}}
			/>
		</PageMargin>
	)
}
