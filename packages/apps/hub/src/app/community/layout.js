import { PATHS } from '@/util/paths'
import { Header } from '@/components/Header'

const Layout = ({ children }) => (
	<>
		<Header selected={PATHS.community} />
		{children}
	</>
)

export default Layout
