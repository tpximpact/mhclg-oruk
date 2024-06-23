import Link from 'next/link'
import { LoremIpsum } from '@tpx/LoremIpsum'
import { Header } from '@/components/Header'

export default function Home() {
	return (
		<>
			<Header selected='' />
			<main>
				<h1>Open Referral UK</h1>
				<LoremIpsum />
				<Link href='/dashboard'>Dashboard</Link>
				<Link href='/validate'>Validate</Link>
			</main>
		</>
	)
}
