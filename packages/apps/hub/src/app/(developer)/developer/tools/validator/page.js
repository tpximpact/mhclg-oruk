import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { Validator } from '@oruk/Validator'
import { navigate } from '@/actions/validate'

export default function Home() {
	return (
		<div>
			<NamedMarkdownPage name='validator' autoMenu={false}/>
			<Validator validationAction={navigate} />
		</div>
	)
}

export const metadata  = {
	title: 'ORUK service validator',
	description: "The tool to validate your feed",
  }
