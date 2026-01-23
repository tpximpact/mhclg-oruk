import { ToastProvider } from './_components/ToastProvider'
import { Register } from './_components/Register'
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
