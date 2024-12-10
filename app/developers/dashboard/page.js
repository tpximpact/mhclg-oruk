import { RemoteJSON, METHOD } from '@/components/RemoteJSON'
import { Dashboard } from '@/components/Dashboard'
import { PageMargin } from '@/components/PageMargin'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'

export const metadata = {
	title: 'ORUK verified feed availabilty'
}

export default async function Page(props) {
    const searchParams = await props.searchParams;
    return (
		<>
			<NamedMarkdownPage autoMenu={false} name='dashboard' />
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
