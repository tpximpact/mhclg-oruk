import { readFile } from '@/util/content'
import { PATHS } from '@/util/paths'
import { MarkdownContent } from '@/components/MarkdownContent'

const SUBFOLDER = PATHS.info.terms

const Page = () => {
	const markdownRaw = readFile({
		folder: SUBFOLDER
	})
	return <MarkdownContent raw={markdownRaw} />
}
export default Page
