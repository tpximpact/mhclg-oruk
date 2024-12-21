import type { Preview } from '@storybook/react'
import { font } from '../utilities/fonts'
import '@/styles/reset.css'
import '@/styles/tokens.css'
import '@/styles/global.css'
import '@/styles/no-js.css'


const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	},
	decorators: [
		Story => (
			
			<div className={`${font.className}`}>
				<Story />
			</div>
		)
	]
}

export default preview
