import { RemoteJSON, METHOD } from '@/components/RemoteJSON'
import { ValidatorResult, ValidatorResultPageTitle } from '@/components/ValidatorResult'
import { ValidatorForm } from '@/components/ValidatorForm'
import { navigate } from '@/actions/validate'
import { CONFIG } from '/config'

export async function generateMetadata({ params }) {
	return {
		title: `ORUK validation report: ${params.uri}`,
		description: 'Report of compliance of the Openreferral feed at ${params.uri}'
	}
}

export default async function Page({ params, searchParams }) {
	return (
		<>
			<ValidatorResultPageTitle />
			<RemoteJSON
				method={METHOD.POST}
				RetryComponent={() => (
					<section style={{ marginTop: '2rem' }}>
						<h2>Retry?</h2>
						<ValidatorForm action={navigate} defaultValue={searchParams.uri} />
					</section>
				)}
				ResultRenderComponent={ValidatorResult}
				endpoint={CONFIG.VALIDATOR_ENDPOINT}
				queryParams={{
					uri: searchParams.uri,
					id: params.id
				}}
			/>
		</>
	)
}
