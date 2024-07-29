const config = {
	stories: ['../packages/**/*.mdx', '../packages/**/*.stories.@(js|jsx|ts|tsx)'],
	framework: {
		name: '@storybook/nextjs',
		options: {
			nextConfigPath: '../packages/apps/hub/next.config.js'
		}
	}
}
export default config
