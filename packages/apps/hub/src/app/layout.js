import { Inter } from 'next/font/google'
import './tokens.css'
import './no-js.css'
import './mvp.css' // temporary placeholder styles

import { Cookies } from '@/components/Cookies'
import Axe from '@/components/Axe'
import { NoJsBanner } from '@/components/NoJsBanner'
import { Footer } from '@/components/Footer'
import { NoJsFallback } from '@/components/NoJsFallback'
import { PageWrapper } from '@/components/PageWrapper'

import defaultMetadata from '/content/metadata.json'

const inter = Inter({ subsets: ['latin'] })

export const metadata = defaultMetadata

export default function RootLayout({ children }) {
	return (
		<html lang='en' id='html' className='no-js'>
			<body className={inter.className}>
				<PageWrapper>
				<NoJsBanner />
					<Axe />
					<Cookies />
					<div>{children}</div>
					<Footer />
					
				</PageWrapper>
				<NoJsFallback />
			</body>
		</html>
	)
}
