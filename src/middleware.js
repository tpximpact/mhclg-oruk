import { NextResponse } from 'next/server'
import redirects from './redirects.json'

export function middleware(request) {
	const url = new URL(request.url)
	const hostname = url.hostname
	const pathname = url.pathname
	const origin = url.origin

	// Hostname based redirect
	const targetPath = redirects[hostname]

	if (targetPath) {
		const isAbsolute = targetPath.startsWith('http')
		const redirectUrl = isAbsolute
			? new URL(targetPath)
			: new URL(targetPath, origin)
		return NextResponse.redirect(redirectUrl)
	}

	// Path-based redirect
	if (redirects.paths && redirects.paths[pathname]) {
		return NextResponse.redirect(new URL(redirects.paths[pathname], origin))
	}

	// THe next bit splices the current path in to the headers.
	// see https://www.propelauth.com/post/getting-url-in-next-server-components

	// There's a known bug in middlewares which manipulate headers which causes useActionState to fail.
	// Workaround is from https://github.com/vercel/next.js/issues/50659#issuecomment-1846046743
	const p = request.nextUrl.pathname
	let headers = new Headers(request.headers)
	headers.set('x-current-path', p)

	return NextResponse.next({
		request: {
			headers: headers
		}
	})
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
