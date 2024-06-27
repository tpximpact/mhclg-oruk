import { PATHS } from '@/util/paths'
import { Header } from '@/components/Header'

const Layout = ({ children }) => (
	<>
		<Header selected={PATHS.developer} developer={true}/>
		<main>(developer sub menu - TODO)</main>
		{children}
	</>
)

export default Layout
