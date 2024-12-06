import '../packages/apps/hub/src/styles/reset.css'
import '../packages/apps/hub/src/styles/global.css'
import '../packages/apps/hub/src/styles/tokens.css'
import '../packages/apps/hub/src/styles/no-js.css'

const preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	},

	tags: ['autodocs']
}

export default preview
