import { dirname, join } from 'path'
const config = {
	stories: ['../packages/**/*.mdx', '../packages/**/*.stories.@(js|jsx|ts|tsx)'],

	framework: {
		name: getAbsolutePath('@storybook/nextjs'),
		options: {
			nextConfigPath: '../packages/apps/hub/next.config.js'
		}
	},

	docs: {},

	typescript: {
		reactDocgen: 'react-docgen-typescript'
	}
}
export default config

function getAbsolutePath(value) {
	return dirname(require.resolve(join(value, 'package.json')))
}
