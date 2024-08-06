'use server'

import { ValidationResultWithSuspense } from '@/components/ValidationResultWithSuspense'
import { fetchValidationResult } from '@/components/ValidationResultWithSuspense'
import { headers } from 'next/headers'

function isInitialPageLoad() {
	return !!headers().get('accept')?.includes('text/html')
}

export const RemoteJSON = async ({ request }) => {
	let result

	if (isInitialPageLoad()) {
		result = await fetchValidationResult(request)
	}

	return <ValidationResultWithSuspense result={result} {...request} />
}
