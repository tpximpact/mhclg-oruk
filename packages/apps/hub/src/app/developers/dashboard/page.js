import { RemoteJSON, METHOD } from '@/components/RemoteJSON'
import {
	Dashboard
	/*, generate */
} from '@/components/Dashboard'
import { PageMargin } from '@tpx/PageMargin'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'

export const metadata = {
	title: 'ORUK dashboard'
}

export default async function Page({ searchParams }) {
	//let data = await fetch('https://oruk-api-2a920f51d6bb.herokuapp.com/api/Mock/v1/dashboard')
	//let posts = await data.json()

	//const result = generate({ numRows: 24, rowsPerPage: 10, failEveryNRows: 8 })
	return (
		<>
			{
				//JSON.stringify(posts)
			}
			<NamedMarkdownPage name='dashboard' />
			<PageMargin>
				<RemoteJSON
					method={METHOD.GET}
					ResultRenderComponent={Dashboard}
					endpoint={process.env.DASHBOARD_ENDPOINT}
					currentPage={searchParams.page ? parseInt(searchParams.page) : 1}
				/>
				{/*
				<Dashboard
					result={result}
					currentPage={searchParams.page ? parseInt(searchParams.page) : 1}
				/>*/}
			</PageMargin>
		</>
	)
}
