import { ValidationResultWithSuspense } from '@/components/ValidationResultWithSuspense'
import { fetchValidationResult } from '@/components/ValidationResultWithSuspense'
import { Main } from '@tpx/Main'
import { PageMargin } from '@tpx/PageMargin'
import { headers } from 'next/headers'

export function isInitialPageLoad() {
	return !!headers().get('accept')?.includes('text/html')
}

export async function generateMetadata({ params }) {
	return {
		title: `ORUK validation report: ${params.uri}`,
		description: 'Report of compliance of the Openreferral feed at ${params.uri}'
	}
}

export default async function Page({ params, searchParams }) {
	let result
	const args = {
		uri: searchParams.uri,
		id: params.id
	}

	if (isInitialPageLoad()) {
		result = await fetchValidationResult(args)
	}

	return (
		<PageMargin>
			<Main>
				<h1>Service Validation results</h1>
				<ValidationResultWithSuspense result={result} {...args} />
			</Main>
		</PageMargin>
	)
}
