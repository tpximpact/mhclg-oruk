'use client'

import CookieConsent from 'react-cookie-consent'
import Link from 'next/link'

const DEFAULT_COOKIE_NAME = 'orukCookieConsent'

export const Cookies = ({ name = DEFAULT_COOKIE_NAME }) => (
	<CookieConsent
		location='bottom'
		buttonText='Accept'
		declineButtonText='Decline'
		cookieName={name}
		containerClasses='cookie-consent-container'
		buttonClasses='cookie-accept-button'
		declineButtonClasses='cookie-decline-button'
		contentClasses='cookie-content'
		expires={150}
	>
		By using our site, you acknowledge that you have read and understand our <Link href="/info/privacy">Cookie Policy</Link>.
	</CookieConsent>
)
