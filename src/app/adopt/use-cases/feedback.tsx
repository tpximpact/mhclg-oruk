import Link from 'next/link'
import { CSSProperties } from 'react'

const feedbackStyle: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
}

const headerStyle = {
	color: 'var(--theme-headline)',
	fontWeight: '700',
}

export default function Feedback() {
	return (
		<div style={feedbackStyle}>
			<div style={headerStyle}> Help us improve these pages</div>

			<div>
				{'Your feedback is important: '}
				<Link href='#'>Tell us how were doing</Link>
			</div>
		</div>
	)
}
