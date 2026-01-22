import { ToastProvider, Register } from '@/components/Register'
import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
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
