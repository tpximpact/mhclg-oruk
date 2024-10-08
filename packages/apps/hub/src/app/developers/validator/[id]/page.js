import { RemoteJSON, METHOD } from '@/components/RemoteJSON'
import { ValidatorResult, ValidatorResultPageTitle } from '@/components/ValidatorResult'
import { ValidatorForm } from '@/components/ValidatorForm'
import { navigate } from '@/actions/validate'
import { PageMargin } from '@tpx/PageMargin'

export async function generateMetadata({ params }) {
	return {
		title: `ORUK validation report: ${params.uri}`,
		description: 'Report of compliance of the Openreferral feed at ${params.uri}'
	}
}

export default async function Page({
	//params,
	searchParams
}) {
	return (
		<PageMargin>
			<ValidatorResultPageTitle />
			<RemoteJSON
				method={METHOD.POST}
				RetryComponent={() => (
					<section style={{ marginTop: '2rem' }}>
						<h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Retry validation</h2>
						<ValidatorForm action={navigate} defaultValue={searchParams.uri} />
					</section>
				)}
				ResultRenderComponent={ValidatorResult}
				endpoint={process.env.VALIDATOR_ENDPOINT}
				queryParams={{
					serviceUrl: searchParams.uri
				}}
			/>
		</PageMargin>
	)
}
