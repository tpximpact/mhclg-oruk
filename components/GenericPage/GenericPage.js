import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { PageList } from '@/components/PageList'
import { PageMargin } from '@/components/PageMargin'
import { notFound } from 'next/navigation'
import { getNamedSiteItem } from '@/utilities/getNamedSiteItem'
import { formatNodesForPageMenu } from '@/utilities/formatNodesForPageMenu'

export const metadata = name => {
	const pageData = getNamedSiteItem(name)
	return {
		title: pageData && pageData.label ? pageData.label : 'Open Referral UK'
	}
}

export const GenericPage = ({ name }) => {
	const pageData = getNamedSiteItem(name)
	if (!pageData) return notFound()
	let nodes = pageData.childNodes
	if (nodes) {
		nodes = nodes.map(node => getNamedSiteItem(node))
		nodes = formatNodesForPageMenu(nodes)
	}

	return (
		<>
			<NamedMarkdownPage name={name} autoMenu={pageData.autoMenu} />
			{nodes && nodes.length > 0 && (
				<PageMargin>
					<PageList data={nodes} />
				</PageMargin>
			)}
		</>
	)
}
