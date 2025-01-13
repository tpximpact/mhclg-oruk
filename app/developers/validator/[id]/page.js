import { RemoteJSON, METHOD } from '@/components/RemoteJSON'
import { ValidatorResult, ValidatorResultPageTitle } from '@/components/ValidatorResult'
import { ValidatorForm } from '@/components/ValidatorForm'
import { navigate } from '@/actions/validate'
import { PageMargin } from '@/components/PageMargin'
import { Suspense } from 'react';

export async function generateMetadata(props) {
	const params = await props.params
	return {
		title: `ORUK validation report: ${params.uri}`,
		description: 'Report of compliance of the Openreferral feed at ${params.uri}'
	}
}

export default async function Page(props) {
	const searchParams = await props.searchParams
	return (
		<PageMargin>
			<ValidatorResultPageTitle />
			<Suspense >
 
<RemoteJSON
				method={METHOD.POST}
				RetryComponent={() => (
					<section style={{ marginTop: '2rem' }}>
						<ValidatorForm action={navigate} defaultValue={searchParams.uri} title='Check again' />
					</section>
				)}
				ResultRenderComponent={ValidatorResult}
				endpoint={process.env.VALIDATOR_ENDPOINT}
				queryParams={{
					serviceUrl: searchParams.uri
				}}
			/></Suspense >
		</PageMargin>
	)
}
