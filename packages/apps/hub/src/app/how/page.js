import { readFile  } from '@/util/content'
import { PATHS } from '@/util/paths'
import { MarkdownContent } from '@/components/MarkdownContent'

import { Menu } from '@/components/Menu'

const Page = () => {
	const markdownRaw = readFile({
		folder: PATHS.how
	})
	return (
		<>
			<MarkdownContent raw={markdownRaw} />
			<Menu />
		</>
	)
}
export default Page
