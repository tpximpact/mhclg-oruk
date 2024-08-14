import { headers } from 'next/headers'
import { SuspenseIf } from '@tpx/SuspenseIf'
import Spinner from '@tpx/Spinner'

export const METHOD = {
	POST: 1,
	GET: 2
}

const ResultLoader = async ({ ResultRenderComponent, ...args }) => {
	const result = await fetchResult(args)
	return result && result.ok ? (
		<ResultRenderComponent result={result} />
	) : (
		<Error data={result.error} />
	)
}

const Error = ({ data }) => {
	return (
		<div style={{ fontWeight: 600 }}>
			<strong>Sorry, an unexpected error occurred.</strong> {data}
		</div>
	)
}

const ResultWithSuspense = ({ result, RetryComponent, ...props }) => (
	<SuspenseIf condition={!result} fallback={<Spinner />}>
		<ResultLoader {...props} />
		{RetryComponent && <RetryComponent />}
	</SuspenseIf>
)

const fetchResult = async ({ endpoint, method, queryParams }) => {
	try {
		const opts = method === METHOD.POST ? { method: 'POST' } : null
		const response = await fetch(endpoint, opts) // TODO send query params

		if (response.ok) {
			return {
				ok: true,
				endpoint: endpoint,
				queryParams: queryParams,
				result: await response.json()
			}
		} else {
			if (response.status === 404) throw new Error('404, Not found')
			if (response.status === 500) throw new Error('500, internal server error')
			throw new Error(response.status)
		}
	} catch (error) {
		return {
			ok: false,
			error: `${error.message}: ${error.cause && error.cause.message && error.cause.message}`
		}
	}
}

const isInitialPageLoad = () => !!headers().get('accept')?.includes('text/html')

export const RemoteJSON = async props => {
	let result

	if (isInitialPageLoad()) {
		result = await fetchResult(props)
	}
	return <ResultWithSuspense result={result} {...props} />
}
