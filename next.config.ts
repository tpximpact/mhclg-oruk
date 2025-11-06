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
						value: 'validator.openreferraluk.org'
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
						value: 'developers.openreferraluk.org'
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
						value: 'docs.openreferraluk.org'
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
						value: 'taxonomy.openreferraluk.org'
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
						value: 'schema.openreferraluk.org'
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
						value: 'forum.openreferraluk.org'
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
