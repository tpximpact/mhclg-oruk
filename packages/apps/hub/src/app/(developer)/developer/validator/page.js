import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { ValidatorForm } from '@/components/ValidatorForm'
import { navigate } from '@/actions/validate'
import { PageMargin } from '@tpx/PageMargin'

export default function Page() {
	return (
		<>
			<NamedMarkdownPage name='validator' autoMenu={false} />
			<PageMargin><ValidatorForm action={navigate} /></PageMargin>
		</>
	)
}

export const metadata = {
	title: 'ORUK service validator',
	description: 'The tool to validate your feed'
}
