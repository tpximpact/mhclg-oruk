import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { Masthead } from '@/components/Masthead'

export const Homepage = () => (
	<div>
		<Masthead />
		<main>
			<NamedMarkdownPage name='home' />
		</main>
	</div>
)
