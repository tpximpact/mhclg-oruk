import { RemoteJSON, METHOD } from '@/components/RemoteJSON'
import { Dashboard } from '@/components/Dashboard'
import { PageMargin } from '@tpx/PageMargin'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'

export const metadata = {
	title: 'ORUK dashboard'
}

export default async function Page({ searchParams }) {
	return (
		<>
			<NamedMarkdownPage name='dashboard' />
			<PageMargin>
				<RemoteJSON
					method={METHOD.GET}
					ResultRenderComponent={Dashboard}
					endpoint={process.env.DASHBOARD_ENDPOINT}
					currentPage={searchParams.page ? parseInt(searchParams.page) : 1}
				/>
			</PageMargin>
		</>
	)
}
