import { NextResponse } from 'next/server'

const redirects = {
	'validator.openreferraluk.org': '/developers/validator',
	'developers.openreferraluk.org': '/developers',
	'docs.openreferraluk.org': '/developers/api',
	'taxonomy.openreferraluk.org': '/developers/overview',
	'schema.openreferraluk.org': '/developers/schemata'
}

export function middleware(request) {
	const url = new URL(request.url)

	if (url.hostname === 'forum.openreferraluk.org') {
		return NextResponse.redirect(new URL('/', 'https://forum.openreferral.org'))
	}

	const targetPath = redirects[url.hostname]
	if (targetPath) {
		return NextResponse.redirect(new URL(targetPath, 'https://openreferraluk.org'))
	}

	// TH next bit splices the current path in to the headers.
	// see https://www.propelauth.com/post/getting-url-in-next-server-components

	// There's a known bug in middlewares which manipulate headers which causes useActionState to fail.
	// Workaround is from https://github.com/vercel/next.js/issues/50659#issuecomment-1846046743
	const p = request.nextUrl.pathname
	let headers = new Headers(request.headers)
	headers.set('x-current-path', p)
	const response = NextResponse.next({
		request: {
			headers: headers
		}
	})
	return response
}

export const config = {
	matcher: [
		{
			source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
			missing: [
				{ type: 'header', key: 'next-router-prefetch' },
				{ type: 'header', key: 'next-action' },
				{ type: 'header', key: 'purpose', value: 'prefetch' }
			]
		}
	]
}
