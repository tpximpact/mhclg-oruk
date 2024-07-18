import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { Masthead } from '@/components/Masthead'

export const Homepage = () => (
	<div>
		<Masthead />
		<NamedMarkdownPage name='home' />
	</div>
)
