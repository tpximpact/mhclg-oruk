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
		return [
			{
				source: '/specifications/:path*',
				headers: [
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
	}
}

export default nextConfig
