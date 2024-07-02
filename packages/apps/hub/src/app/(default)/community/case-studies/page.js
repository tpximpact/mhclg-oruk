import { readFile } from '@/util/content'
//import { PATHS } from '@/util/paths'
import { MarkdownContent } from '@/components/MarkdownContent'
import { buildItemMenuData } from '@/util/content'
import { Menu } from '@/components/Menu'

const Page = () => {
	const markdownRaw = readFile({
		folder: '/community/case-studies'
	})

	const items = buildItemMenuData('/community/case-studies')

	return (
		<>
			<MarkdownContent raw={markdownRaw} />
			<Menu items={items} folder={'community/case-studies'} />
		</>
	)
}
export default Page
