import { Inter } from 'next/font/google'

import '@/styles/reset.css'
import '@/styles/tokens.css'
import '@/styles/global.css'
import '@/styles/no-js.css'

import { NoWarranty } from '@/components/NoWarranty'
import { Header } from '@/components/Header'
import { LandmarkMain } from '@/components/LandmarkMain'
import { LandmarkContentInfo } from '@/components/LandmarkContentInfo'
import { Cookies } from '@/components/Cookies'
import Axe from '@/components/Axe'
import { NoJsBanner } from '@/components/NoJsBanner'
import { NoJsFallback } from '@/components/NoJsFallback'
import { Crumbtrail } from '@/components/Crumbtrail'
import { configValueToBoolean } from '@/utilities/configValueToBoolean'
import { getInfoMenuItems } from '@/utilities/getInfoMenuItems'

import { getRootLayoutItems } from '@/utilities/getRootLayoutItems'

const font = Inter({ subsets: ['latin'] })

export const metadata = {
	generator: 'Next.js',
	applicationName: 'Open Referral UK',
	referrer: 'origin-when-cross-origin',
	keywords: ['open referral', 'ORUK', 'OR-UK'],
	creator: 'Open Referral UK',
	publisher: 'Open Referral UK',
	metadataBase: new URL('https://openreferraluk.org'),
	alternates: {
		canonical: '/'
	},
	openGraph: {
		title: 'Open Referral UK',
		description: 'The React Framework for the Web',
		url: 'https://openreferraluk.org',
		siteName: 'Open Referral UK',
		locale: 'en_GB',
		type: 'website'
	}
}

const Wrap = ({ children }) => (
	<html lang='en' id='html' className='no-js'>
		<body className={`${font.className}`}>{children}</body>
	</html>
)

export default async function RootLayout({ children }) {
	// const headerList = await headers();
	// const pathname = headerList.get("x-current-path");
	// console.log ("--> " + pathname)

	const items = getRootLayoutItems()
	return (
		<Wrap>
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
		</Wrap>
	)
}
