import { SuspenseIf } from '@tpx/SuspenseIf'
import Spinner from '@tpx/Spinner'
import { ValidationResult } from '@/components/ValidationResult'

const REMOTE_ENDPOINT = 'https://dummyjson.com/quotes'

async function ValidationResultLoader(params) {
	const result = await fetchValidationResult({...params})

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

export async function fetchValidationResult() {
	//console.log("Getting data from " + uri + "/" + id)
	const url = REMOTE_ENDPOINT
	const res = await fetch(url)
	const data = await res.json()
	return data
}
