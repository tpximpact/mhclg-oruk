import { Inter } from 'next/font/google'

import '@/styles/reset.css'
import '@/styles/tokens.css'
import '@/styles/global.css'
import '@/styles/no-js.css'

import { LandmarkBanner } from '@/components/LandmarkBanner'
import { LandmarkNav } from '@/components/LandmarkNav'
import { LandmarkMain } from '@/components/LandmarkMain'
import { LandmarkContentInfo } from '@/components/LandmarkContentInfo'
import { Cookies } from '@/components/Cookies'
import Axe from '@/components/Axe'
import { NoJsBanner } from '@/components/NoJsBanner'
import { NoJsFallback } from '@/components/NoJsFallback'
import defaultMetadata from '/content/metadata.json'
import { getSiteItems } from '@/util/content'
import { siteStructureWithFullPaths } from '@/util/menuing'
import { CONFIG } from '/config'

const inter = Inter({ subsets: ['latin'] })

export const metadata = defaultMetadata

export default function RootLayout({ children }) {
	return (
		<html lang='en' id='html' className='no-js'>
			<body className={inter.className}>
				{/*<pre>{
				JSON.stringify(
					siteStructureWithFullPaths(getSiteItems()),null,2)
			}</pre>*/}

				<div style={{ maxWidth: '100vw' }}>
					{CONFIG.USE_AXE && <Axe />}
					{CONFIG.USE_COOKIES && <Cookies />}
					<NoJsBanner />
					<LandmarkBanner />
					{CONFIG.USE_NAV && <LandmarkNav items={siteStructureWithFullPaths(getSiteItems())} />}
					<LandmarkMain>{children}</LandmarkMain>
				</div>
				<LandmarkContentInfo />
				<NoJsFallback />
			</body>
		</html>
	)
}
