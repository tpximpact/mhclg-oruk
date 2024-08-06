import { headers } from 'next/headers'
import { SuspenseIf } from '@tpx/SuspenseIf'
import Spinner from '@tpx/Spinner'

const ResultLoader = async ({ ResultRenderComponent, ...args }) => {
	const result = await fetchResult(args)
	return <ResultRenderComponent result={result} />
}

const ResultWithSuspense = ({ result, ...props }) => (
	<SuspenseIf condition={!result} fallback={<Spinner />}>
		<ResultLoader {...props} />
	</SuspenseIf>
)

const fetchResult = async ({ endpoint, queryParams }) => {
	const res = await fetch(endpoint) // TODO send query params
	return ({
		endpoint: endpoint,
		queryParams: queryParams,
		result: await res.json()
	})
}

const isInitialPageLoad = () => !!headers().get('accept')?.includes('text/html')

export const RemoteJSON = async props => {
	let result

	if (isInitialPageLoad()) {
		result = await fetchResult(props)
	}
	return <ResultWithSuspense result={result} {...props} />
}
