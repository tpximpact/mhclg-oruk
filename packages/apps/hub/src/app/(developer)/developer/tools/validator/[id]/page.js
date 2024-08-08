import { Main } from '@tpx/Main'
import { PageMargin } from '@tpx/PageMargin'
import { RemoteJSON } from '@/components/RemoteJSON'
import { ValidatorResult, ValidatorResultPageTitle } from '@/components/ValidatorResult'
import { ValidatorForm } from '@/components/ValidatorForm'
import { navigate } from '@/actions/validate'

export async function generateMetadata({ params }) {
	return {
		title: `ORUK validation report: ${params.uri}`,
		description: 'Report of compliance of the Openreferral feed at ${params.uri}'
	}
}

export default async function Page({ params, searchParams }) {
	return (
		<PageMargin>
			<Main>
				<ValidatorResultPageTitle />
				<RemoteJSON
					RetryComponent={() => (
						<>
							<h2>Retry?</h2>
							<ValidatorForm action={navigate} defaultValue={searchParams.uri} />
						</>
					)}
					ResultRenderComponent={ValidatorResult}
					endpoint='https://dummyjson.com/quotes'
					//endpoint='https://doesntexistinthisuniverseoranyother.com/nope'
					//endpoint='https://google.com'

					queryParams={{
						uri: searchParams.uri,
						id: params.id
					}}
				/>
			</Main>
		</PageMargin>
	)
}
