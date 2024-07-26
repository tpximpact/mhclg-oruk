import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { Masthead } from '@/components/Masthead'
import { Main } from '@tpx/Main'

export const Homepage = ({ contentName }) => (
	<>
		<Masthead />
		<Main>
			<NamedMarkdownPage name={contentName} />
		</Main>
	</>
)
