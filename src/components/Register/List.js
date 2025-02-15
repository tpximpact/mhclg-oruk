import { getMessages } from '@/app/actions'

export const List = async () => {
	const messages = await getMessages()

	if (Array.isArray(messages)) {
		const message = JSON.parse(messages[0].text)
		const link = message.updateLink
		return (
			<p>
				Our review process is open and transparent. If you would like to track the progress of your
				reqest, you can do so at{' '}
				<a href={link} target='_blank'>
					{link}
				</a>
				.
			</p>
		)
	}
	return null
}
