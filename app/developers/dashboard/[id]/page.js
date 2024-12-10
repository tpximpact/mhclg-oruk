//import Link from 'next/link'
import { RemoteJSON, METHOD } from '@/components/RemoteJSON'
import { DashboardDetails } from '@/components/DashboardDetails'
import { PageMargin } from '@/components/PageMargin'

export async function generateMetadata() {
	return {
		title: `ORUK data feed report`,
		description: 'Detail view'
	}
}

export default async function Page(props) {
	const params = await props.params
	return (
		<PageMargin>
			<RemoteJSON
				method={METHOD.GET}
				ResultRenderComponent={DashboardDetails}
				endpoint={process.env.DASHBOARD_DETAILS_ENDPOINT + '/' + params.id}
				queryParams={{
					id: params.id
				}}
			/>
		</PageMargin>
	)
}
