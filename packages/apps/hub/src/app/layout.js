import { Inter } from 'next/font/google'

import '@/styles/reset.css'
import '@/styles/tokens.css'
import '@/styles/global.css'
import '@/styles/no-js.css'

import { LandmarkBanner } from '@/components/LandmarkBanner'
import { LandmarkNavigation } from '@/components/LandmarkNavigation'
import { LandmarkMain } from '@/components/LandmarkMain'
import { LandmarkContentInfo } from '@/components/LandmarkContentInfo'
import { Cookies } from '@/components/Cookies'
import Axe from '@/components/Axe'
import { NoJsBanner } from '@/components/NoJsBanner'
import { NoJsFallback } from '@/components/NoJsFallback'
import defaultMetadata from '/content/metadata.json'


const USE_AXE = true
const USE_COOKIES = false
const USE_NAV = false

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
	return (
		<html lang='en' id='html' className='no-js'>
			<body className={inter.className}>
				{USE_AXE && <Axe />}
				{USE_COOKIES && <Cookies />}
				<NoJsFallback />
				<LandmarkBanner>
					<NoJsBanner />
				</LandmarkBanner>
				{USE_NAV && <LandmarkNavigation />}
				<LandmarkMain>
					{children}
				</LandmarkMain>
				<LandmarkContentInfo />
			</body>
		</html>
	)
}
