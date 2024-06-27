import { readFile } from '@/util/content'
import { PATHS } from '@/util/paths'
import { MarkdownContent } from '@/components/MarkdownContent'
import { buildItemMenuData } from '@/util/content'
import { Menu } from '@/components/Menu'

const Page = () => {
	const folder = PATHS.how
	const markdownRaw = readFile({
		folder: folder
	})

	const items = buildItemMenuData(folder)
	items.push({
		absolute: true,
		target: '/developer/tools/dashboard',
		text: 'Data feed dashboard'
	})

	return (
		<>
			<MarkdownContent raw={markdownRaw} />
			<Menu items={items} folder={folder} />
		</>
	)
}
export default Page
