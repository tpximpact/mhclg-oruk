// see https://nextjs.org/docs/app/api-reference/next-config-js/serverComponentsHmrCache

const nextConfig = {
	experimental: {
		serverComponentsHmrCache: false // defaults to true
	}
}

module.exports = nextConfig