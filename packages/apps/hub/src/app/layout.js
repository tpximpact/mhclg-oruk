import { Inter } from 'next/font/google'
import Script from 'next/script'
import './tokens.css'
import './no-js.css'
import './mvp.css' // temporary placeholder styles

import Axe from '@/components/Axe'
import { NoJsBanner } from '@/components/NoJsBanner'
import { Footer } from '@/components/Footer'
import { NoJsFallback} from '@/components/NoJsFallback'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Open Referral UK',
	description: 'Description here'
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'  id="html" className="no-js">
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
				<NoJsBanner />
				<NoJsFallback />
			</body>
		</html>
	)
}
