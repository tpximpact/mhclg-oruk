import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { Register } from '@/components/Register'



export const metadata = {
	title: 'Register your feed'
}

export default async function Page() {
	return <>
	<NamedMarkdownPage name='register' />
	<Register />
	</>
}
