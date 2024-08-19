import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { ValidatorForm } from '@/components/ValidatorForm'
import { navigate } from '@/actions/validate'

export default function Page() {
	return (
		<>
			<NamedMarkdownPage name='validator' autoMenu={false} />
			<ValidatorForm action={navigate} />
		</>
	)
}

export const metadata = {
	title: 'ORUK service validator',
	description: 'The tool to validate your feed'
}
