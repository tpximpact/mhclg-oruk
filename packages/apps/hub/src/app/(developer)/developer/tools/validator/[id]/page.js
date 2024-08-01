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
	  description: "Report of compliance of the Openreferral feed at ${params.uri}",
	}
  }

export default async function Page({ params }) {
	let products

	// for initial page load we want to preload all the data
	// for client side navigation we want to lazy load the data and show loading state
	if (isInitialPageLoad()) {
		products = await fetchValidationResult()
	}

	return (
		<div>
			<PageMargin>
				<Main>
					<h1>Service Validation results</h1>
					<div> ID: {params.id}</div>
					<div>
						Raw response: <ValidationResultWithSuspense products={products} />
					</div>
				</Main>
			</PageMargin>
		</div>
	)
}
