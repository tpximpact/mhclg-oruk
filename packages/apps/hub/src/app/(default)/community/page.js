import { readFile } from '@/util/content'
import { PATHS } from '@/util/paths'
import { MarkdownContent } from '@/components/MarkdownContent'
import { Menu } from '@/components/Menu'

const Page = () => {
	const folder = PATHS.community
	const markdownRaw = readFile({
		folder: folder
	})

	const items = [
		{
			absolute: true,
			target: '/community/organisations',
			text: 'Organisations adopting the standard'
		},
		{
			offsite: true,
			target: 'https://forum.openreferral.org',
			text: 'Community forum'
		},
		{
			absolute: true,
			target: '/community/case-studies',
			text: 'Case studies'
		},
		{
			absolute: true,
			target: '/developer/tools/dashboard',
			text: 'Data feed dashboard'
		},
		{
			absolute: true,
			target: '/community/join',
			text: 'Join our community'
		}
	]

	return (
		<>
			<MarkdownContent raw={markdownRaw} />
			<Menu items={items} folder={folder} />
		</>
	)
}
export default Page
