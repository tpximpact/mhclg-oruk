/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverComponentsHmrCache: false
	},
	images: {
		dangerouslyAllowSVG: true
	}
}

export default nextConfig
