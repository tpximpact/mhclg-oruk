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
				source: '/:path*',
				has: [
					{
						type: 'host',
						value: 'validator.:domain*'
					}
				],
				destination: '/developers/validator',
				permanent: true
			},
			{
				source: '/:path*',
				has: [
					{
						type: 'host',
						value: 'developers.:domain*'
					}
				],
				destination: '/developers',
				permanent: true
			},
			{
				source: '/:path*',
				has: [
					{
						type: 'host',
						value: 'docs.:domain*'
					}
				],
				destination: '/developers/api',
				permanent: true
			},
			{
				source: '/:path*',
				has: [
					{
						type: 'host',
						value: 'taxonomy.:domain*'
					}
				],
				destination: '/developers/overview',
				permanent: true
			},
			{
				source: '/:path*',
				has: [
					{
						type: 'host',
						value: 'schema.:domain*'
					}
				],
				destination: '/developers/schemata',
				permanent: true
			},
			{
				source: '/:path*',
				has: [
					{
						type: 'host',
						value: 'forum.:domain*'
					}
				],
				destination: 'https://forum.openreferral.org/',
				permanent: true
			},
			{
				source: '/dashboard',
				destination: '/developers/dashboard',
				permanent: true
			}
		]
	}
}

export default nextConfig
