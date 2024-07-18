const { defineConfig } = require('cypress')

module.exports = defineConfig({
	e2e: {
		// eslint-disable-next-line no-unused-vars
		setupNodeEvents(on, config) {
			// implement node event listeners here
		}
	},

	component: {
		devServer: {
			framework: 'next',
			bundler: 'webpack'
		}
	}
})
