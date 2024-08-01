import { SubNavigation } from '@/components/SubNavigation'
import { Crumbtrail } from '@/components/Crumbtrail'
import { buildCrumbtrail } from '@/util/content'

const Layout = ({ children }) => (
	<>	{/*
		<SubNavigation selected='tools' />
		<Crumbtrail crumbs={buildCrumbtrail('tools')} />
		*/}
		{children}
	</>
)

export default Layout
