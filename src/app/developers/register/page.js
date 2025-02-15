import { ToastProvider, Register } from '@/components/Register'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'

export const metadata = {
	title: 'Register'
}

export default function Home() {
	return (
		<ToastProvider>
			<NamedMarkdownPage name='register' />
			<Register />
		</ToastProvider>
	)
}
