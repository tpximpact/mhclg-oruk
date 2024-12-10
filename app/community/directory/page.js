import { RemoteJSON, METHOD } from '@/components/RemoteJSON'
import { Directory } from '@/components/Directory'
//import { generate } from '@/components/Dashboard'
import { PageMargin } from '@/components/PageMargin'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'

export const metadata = {
	title: 'ORUK directory'
}

export default async function Page(props) {
    const searchParams = await props.searchParams;
    // const result = generate({ numRows: 24, rowsPerPage: 10, failEveryNRows: 8 })

    return (
		<>
			<NamedMarkdownPage autoMenu={false} name='directory' />
			<PageMargin>
				<RemoteJSON
					method={METHOD.GET}
					ResultRenderComponent={Directory}
					endpoint={process.env.DASHBOARD_ENDPOINT}
					currentPage={searchParams.page ? parseInt(searchParams.page) : 1}
				/>
			{/*	<Directory
					result={result}
					currentPage={searchParams.page ? parseInt(searchParams.page) : 1}
				/> */}
			</PageMargin>
		</>
	)
}
