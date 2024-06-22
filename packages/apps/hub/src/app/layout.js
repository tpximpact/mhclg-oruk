import { Inter } from 'next/font/google'
import { Footer } from '@/components/Footer/index'
import _ from '@swirrl/CssReset' // eslint-disable-line no-unused-vars
import __ from '@swirrl/CssColoursTailwind' // eslint-disable-line no-unused-vars
import './tokens.css'
import './mvp.css' // temporary placeholder styles

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Open Referral UK',
	description: 'Description here'
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				{children}
				<Footer />
			</body>
		</html>
	)
}
