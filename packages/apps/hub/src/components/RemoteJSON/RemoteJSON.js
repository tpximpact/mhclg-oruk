import { headers } from 'next/headers'
import { SuspenseIf } from '@tpx/SuspenseIf'
import Spinner from '@tpx/Spinner'
import { ValidationResult } from '@/components/ValidationResult'

const ResultLoader = async args => {
	const ResultRenderComponent = ValidationResult
	const result = await fetchResult(args)
	return <ResultRenderComponent result={result} />
}

const ResultWithSuspense = ({ result, ...props }) => (
	<SuspenseIf condition={!result} fallback={<Spinner />}>
		<ResultLoader {...props} />
	</SuspenseIf>
)

const fetchResult = async ({ endpoint, queryParams }) => {
	const res = await fetch(endpoint)
	const data = {
		endpoint: endpoint,
		queryParams: queryParams,
		result: await res.json()
	}
	return data
}

const isInitialPageLoad = () => !!headers().get('accept')?.includes('text/html')

export const RemoteJSON = async props => {
	let result

	if (isInitialPageLoad()) {
		result = await fetchResult(props)
	}

	return <ResultWithSuspense result={result} {...props} />
}
