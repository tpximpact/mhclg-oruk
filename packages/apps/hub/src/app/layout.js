import { Inter } from 'next/font/google'
import './tokens.css'
import './mvp.css' // temporary placeholder styles

import Axe from '@/components/Axe'
import { NoJsBanner } from '@/components/NoJsBanner'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Open Referral UK',
	description: 'Description here'
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<div
					style={{
						display: 'grid',
						gridTemplateRows: '1fr auto',
						minHeight: '100vh'
					}}
				>
					<Axe />
					{children}
					<Footer />
				</div>
				<script>// IIFE..</script>
				<NoJsBanner />
			</body>
		</html>
	)
}
