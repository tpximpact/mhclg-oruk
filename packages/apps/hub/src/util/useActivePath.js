// TODO: dry up
// 
// inspired by https://nikolasbarwicki.com/articles/highlight-currently-active-link-in-nextjs-13-with-app-router/
/* eslint no-unused-vars: 0 */

import { usePathname } from 'next/navigation'

export const useActivePath = path => {
	// returns true if the current path is the first item in the active path
	const pathname = usePathname()

	const checkActivePath = path => {
		if (path === '/' && pathname !== path) {
			return false
		}
		return pathname.startsWith(path)
	}

	return checkActivePath
}

export const useActivePathFragment = path => {
	// returns true if the current path is the anywhere in the active path
	const pathname = usePathname()

	const checkActivePath = path => {
		
		if (!path) {
			return false
		}
		
		if (path === '/' && pathname !== path) {
			return false
		}
		
		const pathnameFragments = pathname.split('/')
		
		return pathnameFragments.includes(path.replace('/',''))
		
	}

	return checkActivePath
}

export const useActivePathLast = path => {
	// returns true if the current path is the last in the active path
	const pathname = usePathname()

	const checkActivePath = path => {
		
		if (!path) {
			return false
		}
		
		if (path === '/' && pathname !== path) {
			return false
		}
		
		const pathnameFragments = pathname.split('/')
		const lastFragment = pathnameFragments.pop() 
		return lastFragment === (path.replace('/',''))
		
	}

	return checkActivePath
}
