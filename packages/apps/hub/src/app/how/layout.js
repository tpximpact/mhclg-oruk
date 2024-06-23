import { PATHS } from '@/util/paths'
import { Header } from '@/components/Header'

const Layout = ({ children }) => (
	<>
		<Header selected={PATHS.how} />
		{children}
	</>
)

export default Layout
