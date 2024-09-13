import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { InPageMenu } from '@/components/InPageMenu'
import { notFound } from 'next/navigation'
import { getNamedSiteItem } from '@/util/content'

export const metadata = name => {
const pageData = getNamedSiteItem(name)
return {
    title: pageData.label ? pageData.label : "Open Referral UK"
  }
}

export const GenericPage = ({
    name
}) => {
    const pageData = getNamedSiteItem(name)
    if (!pageData) return notFound()
    let nodes = pageData.childNodes
    if (nodes) {
        nodes = nodes.map(
            node => getNamedSiteItem(node)
        )
    }
    

	return <>
      <NamedMarkdownPage name={name} autoMenu={pageData.autoMenu}/>
        {
            nodes && nodes.length > 0 &&
            <InPageMenu nodes={nodes}/>
        }
        </>
}