import { Inter } from 'next/font/google'
import './tokens.css'
import './mvp.css' // temporary placeholder styles

import Axe from '@/components/Axe'
import { Masthead } from '@/components/Masthead'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Open Referral UK',
	description: 'Description here'
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Axe />
				<Masthead home="true"/>
				{children}
			</body>
		</html>
	)
}
