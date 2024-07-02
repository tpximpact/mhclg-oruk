import { PATHS } from '@/util/paths'
import { Header } from '@/components/Header'
import { Main } from '@tpx/Main'

const Layout = ({ children }) => (
	<>
		<Header selected={PATHS.how} />
		<Main>{children}</Main>
	</>
)

export default Layout
