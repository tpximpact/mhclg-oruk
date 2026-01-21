import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	typescript: {
		tsconfigPath: './tsconfig.json'
	},
	experimental: {
		serverComponentsHmrCache: false
	},
	images: {
		dangerouslyAllowSVG: true
	},
	redirects: async () => {
		return [
			{
				source: '/dashboard',
				destination: '/developers/dashboard',
				permanent: true
			}
		]
	},
	headers: async () => {
		// Security headers for all routes
		const securityHeaders = [
			{
				key: 'X-DNS-Prefetch-Control',
				value: 'on'
			},
			{
				key: 'Strict-Transport-Security',
				value: 'max-age=63072000; includeSubDomains; preload'
			},
			{
				key: 'X-Frame-Options',
				value: 'SAMEORIGIN'
			},
			{
				key: 'X-Content-Type-Options',
				value: 'nosniff'
			},
			{
				key: 'X-XSS-Protection',
				value: '1; mode=block'
			},
			{
				key: 'Referrer-Policy',
				value: 'strict-origin-when-cross-origin'
			},
			{
				key: 'Permissions-Policy',
				value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
			},
			{
				key: 'Cross-Origin-Embedder-Policy',
				value: 'credentialless'
			},
			{
				key: 'Cross-Origin-Opener-Policy',
				value: 'same-origin-allow-popups'
			},
			{
				key: 'Cross-Origin-Resource-Policy',
				value: 'cross-origin'
			},
			{
				key: 'Content-Security-Policy',
				value: [
					"default-src 'self'",
					"script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com",
					"style-src 'self' 'unsafe-inline'",
					"img-src 'self' data: https:",
					"font-src 'self' data:",
					"connect-src 'self' https://va.vercel-scripts.com https://*.herokuapp.com",
					"frame-ancestors 'self'",
					"base-uri 'self'",
					"form-action 'self'"
				].join('; ')
			}
		]

		return [
			{
				source: '/:path*',
				headers: securityHeaders
			},
			{
				source: '/specifications/:path*',
				headers: [
					...securityHeaders,
					{
						key: 'Content-Type',
						value: 'application/json'
					},
					{
						key: 'Cache-Control',
						value: 'public, max-age=3600, immutable'
					}
				]
			}
		]
	},
	// Disable X-Powered-By header
	poweredByHeader: false
}

export default nextConfig
