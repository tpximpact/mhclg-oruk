import { headers } from 'next/headers'
import { SuspenseIf } from '@/components/SuspenseIf'
import Spinner from '@/components/Spinner'

export const METHOD = {
	POST: 1,
	GET: 2
}

const ResultLoader = async ({ ResultRenderComponent, args, ...props }) => {
	const result = await fetchResult(args)
	return result && result.ok ? (
		<>
			<ResultRenderComponent result={result} {...props} />
		</>
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

		let queryString = endpoint + '?'

		if (queryParams) {
			Object.keys(queryParams).forEach(
				key => (queryString = `${queryString}${key}=${queryParams[key]}&`)
			)
		}

		const response = await fetch(queryString, opts)

		if (response.ok) {
			const result = await response.json()

			return {
				ok: true,
				endpoint: endpoint,
				queryParams: queryParams,
				result: result
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

const isInitialPageLoad = async () => {
	const h = await headers()
	return h.get('accept')?.includes('text/html')
}

export const RemoteJSON = async props => {
	let result

	const args = {
		endpoint: props.endpoint,
		method: props.method,
		queryParams: props.queryParams
	}

	const ipl = await isInitialPageLoad()
	
	if (ipl) {
		result = await fetchResult(args)
	}
	return <ResultWithSuspense result={result} args={args} {...props} />
}
