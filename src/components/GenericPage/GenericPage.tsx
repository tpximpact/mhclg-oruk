import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { PageList } from '@/components/PageList'
import { PageMargin } from '@/components/PageMargin'
import { notFound } from 'next/navigation'
import { getNamedSiteItem } from '@/utilities/getNamedSiteItem'
import { formatNodesForPageMenu } from '@/utilities/formatNodesForPageMenu'
import { Metadata } from 'next'

export const metadata = (name: string): Metadata => {
	const pageData = getNamedSiteItem(name)
	return {
		title: pageData && pageData.label ? pageData.label : 'Open Referral UK'
	}
}

interface GenericPageProps {
	name: string
}

export const GenericPage = ({ name }: GenericPageProps) => {
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
