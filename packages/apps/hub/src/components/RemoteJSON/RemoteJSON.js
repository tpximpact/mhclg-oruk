import { headers } from 'next/headers'
import { SuspenseIf } from '@tpx/SuspenseIf'
import Spinner from '@tpx/Spinner'
import { ValidationResult } from '@/components/ValidationResult'

const REMOTE_ENDPOINT = 'https://dummyjson.com/quotes'

async function ValidationResultLoader(args) {
	const result = await fetchValidationResult(args)
	return <ValidationResult result={result} />
}

export function ValidationResultWithSuspense({ result, ...props }) {
	return (
		<SuspenseIf condition={!result} fallback={<ValidationResultSkeleton />}>
			<ValidationResultLoader {...props} />
		</SuspenseIf>
	)
}

export function ValidationResultSkeleton() {
	return <Spinner />
}

export async function fetchValidationResult(args) {
	const url = REMOTE_ENDPOINT
	const res = await fetch(url) /*, {
		method: "POST"
	  })*/
	const data = {
		uri: args.uri,
		result: await res.json()
	}
	return data
}

function isInitialPageLoad() {
	return !!headers().get('accept')?.includes('text/html')
}

export const RemoteJSON = async ({ 
    request 
}) => {
	let result

	if (isInitialPageLoad()) {
		result = await fetchValidationResult(request)
	}

	return <ValidationResultWithSuspense result={result} {...request} />
}
