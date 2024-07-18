import { SuspenseIf } from '@tpx/SuspenseIf'
import Spinner from '@tpx/Spinner'

const REMOTE_ENDPOINT = 'https://run.mocky.io/v3/7fbde686-46c1-4ca5-a0b3-1b0008fd54a6'
// const REMOTE_ENDPOINT = 'https://dummyjson.com/quotes'

async function ValidationResultLoader() {
	const result = await fetchValidationResult()

	return <ValidationResult result={result} />
}

export function ValidationResultWithSuspense({ result }) {
	return (
		<SuspenseIf condition={!result} fallback={<ValidationResultSkeleton />}>
			<ValidationResultLoader />
		</SuspenseIf>
	)
}

export function ValidationResult({ result }) {
	return <div>{JSON.stringify(result)}</div>
}

export function ValidationResultSkeleton() {
	return <Spinner />
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export async function fetchValidationResult() {
	await delay(2000)
	const url = REMOTE_ENDPOINT
	const res = await fetch(url)
	const data = await res.json()
	return data
}
