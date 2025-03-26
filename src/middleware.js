import { NextResponse } from 'next/server'

const redirects = {
  'validator.openreferraluk.org': '/developers/validator',
  'developers.openreferraluk.org': '/developers',
  'docs.openreferraluk.org': '/developers/api',
  'taxonomy.openreferraluk.org': '/developers/overview',
  'schema': '/developers/schemata'
};

export function middleware(request) {
	const url = new URL(request.url);
	
	if (url.hostname === 'forum.openreferraluk.org') {
		return NextResponse.redirect(new URL('/', 'https://forum.openreferral.org'))
	}
	
	const targetPath = redirects[url.hostname];
	if (targetPath) {
		return NextResponse.redirect(new URL(targetPath, 'https://openreferraluk.org'))
	}

	// see https://www.propelauth.com/post/getting-url-in-next-server-components
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
