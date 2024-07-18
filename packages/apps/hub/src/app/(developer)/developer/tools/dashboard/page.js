import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { Masthead } from '@/components/Masthead'

import { Dashboard } from '@oruk/Dashboard'

export default function Home() {
	return (
		<div>
			<Masthead />
			<NamedMarkdownPage name='dashboard' />
			<Dashboard />
		</div>
	)
}
