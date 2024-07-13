import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { Validator } from '@oruk/Validator'

export default function Home() {
	return (
		<>
		<NamedMarkdownPage name='validator' />
		<Validator />
		</>
	)
}
