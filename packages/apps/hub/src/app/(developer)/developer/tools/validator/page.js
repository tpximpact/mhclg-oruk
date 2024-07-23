import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { Masthead } from '@/components/Masthead'

import { Validator } from '@oruk/Validator'
import { navigate } from '@/actions/validate'

export default function Home() {
	return (
		<div>
			<NamedMarkdownPage name='validator' />
			<Validator validationAction={navigate} />
		</div>
	)
}
