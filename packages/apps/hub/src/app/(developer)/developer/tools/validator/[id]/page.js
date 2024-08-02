import { ValidationResultWithSuspense } from '@/components/ValidationResultWithSuspense'
import { fetchValidationResult } from '@/components/ValidationResultWithSuspense'
import { Main } from '@tpx/Main'
import { PageMargin } from '@tpx/PageMargin'
import { headers } from 'next/headers'
import { ValidationResult } from '@/components/ValidationResult'

export function isInitialPageLoad() {
	return !!headers().get('accept')?.includes('text/html')
}

export async function generateMetadata({ params }) {
	return {
		title: `ORUK validation report: ${params.uri}`,
		description: 'Report of compliance of the Openreferral feed at ${params.uri}'
	}
}

export const Wrapper = ({ children }) => (
	<PageMargin>
		<Main>
			<h1>Service Validation results</h1>
			{children}
		</Main>
	</PageMargin>
)

export default async function Page({ params, searchParams }) {
	let result
	const js = searchParams.js
	const uri = searchParams.uri
	const id = params.id
	// for initial page load we want to preload all the data
	// for client side navigation we want to lazy load the data and show loading state
	if (isInitialPageLoad()) {
		result = await fetchValidationResult()
	}

	return (
		<Wrapper>
			{js ? (
				<ValidationResultWithSuspense result={result} id={id} uri={uri} />
			) : (
				<ValidationResult result={result} id={id} uri={uri}/>
			)}
		</Wrapper>
	)
}
