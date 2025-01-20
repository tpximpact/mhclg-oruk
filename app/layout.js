import { Inter } from 'next/font/google'

import '@/styles/reset.css'
import '@/styles/tokens.css'
import '@/styles/global.css'
import '@/styles/no-js.css'

import { Header } from '@/components/Header'
import { NoWarranty } from '@/components/NoWarranty'
import { LandmarkMain } from '@/components/LandmarkMain'
import { LandmarkContentInfo } from '@/components/LandmarkContentInfo'
import { Cookies } from '@/components/Cookies'
import Axe from '@/components/Axe'
import { NoJsBanner } from '@/components/NoJsBanner'
import { NoJsFallback } from '@/components/NoJsFallback'
import { Crumbtrail } from '@/components/Crumbtrail'
import defaultMetadata from '/content/metadata.json'
import { configValueToBoolean } from '@/utilities/configValueToBoolean'
import { getInfoMenuItems } from '@/utilities/getInfoMenuItems'

import { getRootLayoutItems } from '@/utilities/getRootLayoutItems'

const font = Inter({ subsets: ['latin'] })

export const metadata = defaultMetadata

export default function RootLayout({ children }) {
	const items = getRootLayoutItems()
	return (
		<html lang='en' id='html' className='no-js'>
			<body className={`${font.className}`}>
				<div style={{ maxWidth: '100vw' }}>
					{configValueToBoolean(process.env.USE_AXE) ? <Axe /> : null}

					{configValueToBoolean(process.env.USE_COOKIES) ? <Cookies /> : null}
					<NoJsBanner />
					<Header items={items} enableMenu={configValueToBoolean(process.env.USE_NAV)} />
					<LandmarkMain>
						{configValueToBoolean(process.env.USE_NOWARRANTY) ? <NoWarranty /> : null}
						{configValueToBoolean(process.env.USE_NAV) ? (
							<Crumbtrail />
						) : (
							<div style={{ height: '4rem' }}></div>
						)}

						{children}
					</LandmarkMain>
				</div>
				<LandmarkContentInfo
					items={items}
					infoItems={getInfoMenuItems()}
					showNav={configValueToBoolean(process.env.USE_NAV)}
				/>
				<NoJsFallback />
			</body>
		</html>
	)
}
