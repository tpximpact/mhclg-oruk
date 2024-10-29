'use server'

import { getNamedSiteItem } from '@/util/getNamedSiteItem'

export const MarkdownError = ({ file }) => {
	const pageData = getNamedSiteItem(file)
	return (
		<div>
			{' '}
			Sorry, the requested content file <span style={{ fontStyle: 'italic' }}>{file}</span> (
			{pageData}) counld not be read
		</div>
	)
}
