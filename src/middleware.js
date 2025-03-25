// see https://www.propelauth.com/post/getting-url-in-next-server-components
//

import { NextResponse } from 'next/server'

export function middleware(request) {
	const url = new URL(request.url);
	console.log("h " + url.hostname)
	if (url.hostname === 'validator.openreferraluk.org') {
		return NextResponse.redirect(new URL('/developers/validator', request.url));
	}
	
	const p = request.nextUrl.pathname
	const headers = new Headers(request.headers)
	headers.set('x-current-path', p)
	return NextResponse.next({ headers })
}

export const config = {
	matcher: [
		// match all routes except static files and APIs
		'/((?!api|_next/static|_next/image|favicon.ico).*)'
	]
}