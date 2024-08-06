import { headers } from 'next/headers'
import { SuspenseIf } from '@tpx/SuspenseIf'
import Spinner from '@tpx/Spinner'
import { ValidationResult } from '@/components/ValidationResult'

async function ResultLoader(args) {
	const result = await fetchResult(args)
	return <ValidationResult result={result} />
}

export function ResultWithSuspense({ result, ...props }) {
	return (
		<SuspenseIf condition={!result} fallback={<ResultSkeleton />}>
			<ResultLoader {...props} />
		</SuspenseIf>
	)
}

export function ResultSkeleton() {
	return <Spinner />
}

export async function fetchResult({
    endpoint,
    queryParams
}) {
	const res = await fetch(endpoint)
	const data = {
        endpoint:endpoint,
		queryParams: queryParams,
		result: await res.json()
	}
	return data
}

function isInitialPageLoad() {
	return !!headers().get('accept')?.includes('text/html')
}

export const RemoteJSON = async (props) => {
	let result

	if (isInitialPageLoad()) {
		result = await fetchResult(props)
	}

	return <ResultWithSuspense {...props} />
}
