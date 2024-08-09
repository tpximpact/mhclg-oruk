import { Inter } from 'next/font/google'
import '@ /styles/tokens.css'
import '@/styles/no-js.css'
import '@/styles/mvp.css' // temporary placeholder styles

import { Cookies } from '@/components/Cookies'
import Axe from '@/components/Axe'
import { NoJsBanner } from '@/components/NoJsBanner'
import { Footer } from '@/components/Footer'
import { NoJsFallback } from '@/components/NoJsFallback'
import { PageWrapper } from '@/components/PageWrapper'

import defaultMetadata from '/content/metadata.json'

const inter = Inter({ subsets: ['latin'] })

export const metadata = defaultMetadata

const USE_AXE = true

export default function RootLayout({ children }) {
	return (
		<html lang='en' id='html' className='no-js'>
			<body className={inter.className}>
				<PageWrapper>
					<NoJsBanner />
					{USE_AXE && <Axe />}
					<Cookies />
					<div>{children}</div>
					<Footer />
				</PageWrapper>
				<NoJsFallback />
			</body>
		</html>
	)
}
