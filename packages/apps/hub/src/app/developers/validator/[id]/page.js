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
					
						<ValidatorForm
					title="Re-check"	action={navigate} defaultValue={searchParams.uri} />
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
