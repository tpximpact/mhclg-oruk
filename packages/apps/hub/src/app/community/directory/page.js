import { RemoteJSON, METHOD } from '@/components/RemoteJSON'
import { Directory } from '@/components/Directory'
import { PageMargin } from '@tpx/PageMargin'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'

export const metadata = {
	title: 'ORUK directory'
}


export default async function Page({ searchParams }) {
	return (
		<>
			<NamedMarkdownPage name='directory' />
			<PageMargin>
				<RemoteJSON
					method={METHOD.GET}
					ResultRenderComponent={Directory}
					endpoint={process.env.DASHBOARD_ENDPOINT}
					currentPage={searchParams.page ? parseInt(searchParams.page) : 1}
				/>
			</PageMargin>
		</>
	)
}
