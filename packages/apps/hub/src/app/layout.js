import { Inter } from 'next/font/google'

import '@/styles/reset.css'
import '@/styles/tokens.css'
import '@/styles/global.css'
import '@/styles/no-js.css'

import { listDynamicSection } from '@/util/dynamicSection'

import { Header } from '@/components/Header'
import { LandmarkMain } from '@/components/LandmarkMain'
import { LandmarkContentInfo } from '@/components/LandmarkContentInfo'
import { Cookies } from '@/components/Cookies'
import Axe from '@/components/Axe'
import { NoJsBanner } from '@/components/NoJsBanner'
import { NoJsFallback } from '@/components/NoJsFallback'
import { Crumbtrail } from '@/components/Crumbtrail'
import defaultMetadata from '/content/metadata.json'
import { getSiteItems } from '@/util/getSiteItems'
import { siteStructureWithFullPaths } from '@/util/menuing'

import { configValueToBoolean } from '@/util/configValueToBoolean'

const font = Inter({ subsets: ['latin'] })

export const metadata = defaultMetadata

const allItems = () => {
	let result = siteStructureWithFullPaths(getSiteItems()).filter(item => item.hide != true)
	result.map(item => {
		if (item.dynamic) {
			let dynamicOverflow
			let dynamicChildNodes = listDynamicSection({
				rootContentFolder: item.urlPath
			})
			const count = dynamicChildNodes.length
			const limit = 3
			if (count > limit) {
				dynamicChildNodes = dynamicChildNodes.slice(0, limit)
				dynamicOverflow = count - limit
			}
			item.dynamicOverflow = dynamicOverflow
			item.dynamicChildNodes = dynamicChildNodes
			return item
		}
	})
	return result
}

export default function RootLayout({ children }) {
	const items = allItems()
	return (
		<html lang='en' id='html' className='no-js'>
			<body className={`${font.className}`}>
				<div style={{ maxWidth: '100vw' }}>
					{configValueToBoolean(process.env.USE_AXE) ? <Axe /> : null}
					{configValueToBoolean(process.env.USE_COOKIES) ? <Cookies /> : null}
					<NoJsBanner />
					<Header items={items} 
					enableMenu={configValueToBoolean(process.env.USE_NAV)}
					/>
					<LandmarkMain>
						{configValueToBoolean(process.env.USE_NAV) ? (
							<Crumbtrail />
						) : (
							<div style={{ height: '4rem' }}></div>
						)}

						{children}
					</LandmarkMain>
				</div>
				<LandmarkContentInfo items={items} showNav={configValueToBoolean(process.env.USE_NAV)} />
				<NoJsFallback />
			</body>
		</html>
	)
}