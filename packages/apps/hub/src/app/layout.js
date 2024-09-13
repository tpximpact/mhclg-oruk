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

const inter = Inter({ subsets: ['latin'] })

export const metadata = defaultMetadata

const configValueToBoolean = v => JSON.parse(v.toLowerCase())

export default function RootLayout({ children }) {
	return (
		<html lang='en' id='html' className='no-js'>
			<body className={inter.className}>
				<div style={{ maxWidth: '100vw' }}>
					{configValueToBoolean(process.env.USE_AXE) ? <Axe /> : null}
					{configValueToBoolean(process.env.USE_COOKIES) ? <Cookies /> : null}
					<NoJsBanner />
					<LandmarkBanner />
					{configValueToBoolean(process.env.USE_NAV) ? <LandmarkNav items={siteStructureWithFullPaths(getSiteItems())} /> : null}
					<LandmarkMain>{children}</LandmarkMain>
				</div>
				<LandmarkContentInfo />
				<NoJsFallback />
			</body>
		</html>
	)
}
