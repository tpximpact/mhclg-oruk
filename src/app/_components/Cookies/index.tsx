'use client'

import CookieConsent from 'react-cookie-consent'
import Link from 'next/link'

const DEFAULT_COOKIE_NAME = 'orukCookieConsent'

interface CookiesProps {
  name?: string
}

export const Cookies = ({ name = DEFAULT_COOKIE_NAME }: CookiesProps) => (
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
    ariaAcceptLabel='Accept cookies'
    ariaDeclineLabel='Decline cookies'
    contentStyle={{ display: 'flex', alignItems: 'center' }}
    style={{ alignItems: 'center' }}
    overlay={false}
  >
    <div role='complementary' aria-label='Cookie consent banner' style={{ flex: 1 }}>
      By using our site, you acknowledge that you have read and understand our{' '}
      <Link href='/info/privacy'>
        <span style={{ color: 'white' }}>Cookie Policy</span>
      </Link>
    </div>
  </CookieConsent>
)
