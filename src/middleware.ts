import { NextRequest, NextResponse } from 'next/server'
import redirects from './redirects.json'

export function middleware(req: NextRequest) {
	const url = req.nextUrl.clone()
    
	const {hostname, origin} = url;
	
	// Hostname based redirect
	const targetPath = redirects[hostname as keyof typeof redirects]
	if (targetPath) {
		const isAbsolute = targetPath.startsWith('http')
		const redirectUrl = isAbsolute
			? new URL(targetPath)
			: new URL(targetPath, origin)

		return NextResponse.redirect(redirectUrl, 308)
	}
	
	return NextResponse.next()
}

// Run on all paths so we can catch root-level requests too
export const config = {
	// Path-only filter: run on app routes, skip API/static/assets.
	// Host-based matching is not supported by matcher; we gate by hostname in code.
	matcher: [
		'/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest|.*\\..*).*)'
	]
}
