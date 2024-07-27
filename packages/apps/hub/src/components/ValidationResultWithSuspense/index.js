import { SuspenseIf } from '@tpx/SuspenseIf'
import Spinner from '@tpx/Spinner'

// const REMOTE_ENDPOINT = 'https://run.mocky.io/v3/7fbde686-46c1-4ca5-a0b3-1b0008fd54a6'
const REMOTE_ENDPOINT = 'https://dummyjson.com/quotes'

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
	return (
		<div>
			<div>{JSON.stringify(result)}</div>

			<div>
				<h2>Results</h2>
				<div role='alert'>
					You have passed level 1 compliance, which means data can be read from your Service
					Directory API in a standard way.
				</div>
				<div role='alert'>
					You have passed level 2 compliance, which means your Service Directory API supports the
					more advanced features of the API standard.
				</div>
				<div>
					<div>
						<h3>Issues</h3>
						<div>
							<div>
								<strong>Unique fields with duplicate content</strong>
							</div>
							<div>
								<ul>
									<li>service_at_location.id</li>
									<li>location.id</li>
									<li>regular_schedule.id</li>
								</ul>
							</div>
						</div>
						<div>
							<div>
								<strong>Invalid format fields</strong>
							</div>
							<div>
								<ul>
									<li>service.id should be in uuid format</li>
									<li>service.url should be in url format</li>
									<li>location.id should be in uuid format</li>
								</ul>
							</div>
						</div>
						<div>
							<div>
								<strong>Warnings</strong>
							</div>
							<div>
								<ul>
									<li>
										The <code>Access-Control-Allow-Origin: *</code> response header is missing this limits how
										the API can be read.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div>
					<h2>Statistics</h2>
					<div>
						<ul>
							<li>Count of organization: 0</li>
							<li>Count of service: 500</li>
							<li>Count of service_taxonomy: 0</li>
							<li>Count of service_at_location: 518</li>
							<li>Count of location: 518</li>
							<li>Count of phone: 0</li>
							<li>Count of contact: 560</li>
							<li>Count of physical_address: 0</li>
							<li>Count of postal_address: 0</li>
							<li>Count of regular_schedule: 1317</li>
							<li>Count of holiday_schedule: 0</li>
							<li>Count of funding: 0</li>
							<li>Count of eligibility: 0</li>
							<li>Count of service_area: 0</li>
							<li>Count of language: 0</li>
							<li>Count of accessibility_for_disabilities: 0</li>
							<li>Count of taxonomy: 0</li>
							<li>Count of cost_option: 443</li>
							<li>Count of review: 0</li>
							<li>Count of link_taxonomy: 0</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export function ValidationResultSkeleton() {
	return <Spinner />
}

// const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export async function fetchValidationResult() {
	// await delay(2000)
	const url = REMOTE_ENDPOINT
	const res = await fetch(url)
	const data = await res.json()
	return data
}
