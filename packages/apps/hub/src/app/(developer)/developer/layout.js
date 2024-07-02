import { PATHS } from '@/util/paths'
import { Header } from '@/components/Header'
import { Main } from '@tpx/Main'

const Layout = ({ children }) => (
	<>
		<Header selected={PATHS.developer} developer={true} />
		<Main>
			<nav>(developer sub menu - TODO)</nav>
			{children}
		</Main>
	</>
)

export default Layout
