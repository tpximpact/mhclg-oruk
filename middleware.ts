/**
 * Next.js Middleware for domain-based redirects
 * Handles legacy domain redirects to new paths
 */

import { proxy } from './src/proxy'

export const middleware = proxy

// Config must be defined statically in middleware.ts (cannot be re-exported)
export const config = {
	// Path-only filter: run on app routes, skip API/static/assets.
	// Host-based matching is not supported by matcher; we gate by hostname in code.
	matcher: [
		'/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest|.*\\..*).*)'
	]
}
