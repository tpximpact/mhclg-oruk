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
	}
}

export default nextConfig
