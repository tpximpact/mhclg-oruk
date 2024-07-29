import '../packages/apps/hub/src/app/tokens.css'
import '../packages/apps/hub/src/app/no-js.css'

const preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
}

export default preview
