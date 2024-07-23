import { Masthead } from '@/components/Masthead'

const Layout = ({ children }) => (
	<>
		<Masthead selected='developers' developer={true} />
		{children}
	</>
)

export default Layout
