// see https://www.propelauth.com/post/getting-url-in-next-server-components
//

import { NextResponse } from 'next/server'

export function middleware(request) {
	const p = request.nextUrl.pathname
	//console.log("Current path:", p);
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
