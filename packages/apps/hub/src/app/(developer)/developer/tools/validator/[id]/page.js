import { Main } from '@tpx/Main'
import { PageMargin } from '@tpx/PageMargin'
import { RemoteJSON } from '@/components/RemoteJSON'

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
				<h1>Service Validation results</h1>
				<RemoteJSON
					endpoint='https://dummyjson.com/quotes'
					queryParams={{
						uri: searchParams.uri,
						id: params.id
					}}
				/>
			</Main>
		</PageMargin>
	)
}
