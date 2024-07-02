
import { Header } from '@/components/Header'
import { Main } from '@tpx/Main'

const Info = ({children}) => 
		<>
			<Header />
			<Main>
				{children}
			</Main>
		</>
	
export default Info
