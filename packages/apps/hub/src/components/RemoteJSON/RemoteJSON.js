import { headers } from 'next/headers'
import { SuspenseIf } from '@tpx/SuspenseIf'
import Spinner from '@tpx/Spinner'

const ResultLoader = async ({ ResultRenderComponent, ...args }) => {
	const result = await fetchResult(args)
	return result && result.ok ? <ResultRenderComponent result={result} /> :
	<Error data={result.error} />
}

const Error = ({data}) => {
	return <div style={{color: "red"}}><strong>Sorry, an unexpected error occurred.</strong> {data}</div>
}

const ResultWithSuspense = ({ result, ...props }) => (
	<SuspenseIf condition={!result} fallback={<Spinner />}>
		<ResultLoader {...props} />
	</SuspenseIf>
)

const fetchResult = async ({ endpoint, queryParams }) => {
	try {
		const res = await fetch(endpoint) // TODO send query params
		if (res.ok) {
			return {
				ok:true,
				endpoint: endpoint,
				queryParams: queryParams,
				result: await res.json()
			}
		} else {
		  if (response.status === 404) throw new Error('404, Not found');
		  if (response.status === 500) throw new Error('500, internal server error');
		  throw new Error(response.status);
		}
	} catch (error) {
		return ({
			ok: false,
			error: `${error.message}: ${error.cause && error.cause.message && error.cause.message}`
		})
	}

	return 

	/*
	

console.log(res)
console.log("########")

		if (res.ok) {
			return {
				endpoint: endpoint,
				queryParams: queryParams,
				result: await res.json()
			}
		} else {
		  if (response.status === 404) throw new Error('404, Not found');
		  if (response.status === 500) throw new Error('500, internal server error');
		  throw new Error(response.status);
		}
	  } catch (error) {
		console.error('Fetch', error);
		
	  }
		*/

}

const isInitialPageLoad = () => !!headers().get('accept')?.includes('text/html')

export const RemoteJSON = async props => {
	let result

	if (isInitialPageLoad()) {
		result = await fetchResult(props)
	}
	return <ResultWithSuspense result={result} {...props} />
}
