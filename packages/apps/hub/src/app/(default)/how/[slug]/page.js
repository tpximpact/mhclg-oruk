import { slugsFrom, readFile } from '@/util/content'
import { PATHS } from '@/util/paths'
import { MarkdownContent } from '@/components/MarkdownContent'

const SUBFOLDER = PATHS.how

export const generateStaticParams = () => slugsFrom(SUBFOLDER)

const Page = ({ params }) => {
	const { slug } = params
	const markdownRaw = readFile({
		slug: slug,
		folder: SUBFOLDER
	})
	return <MarkdownContent raw={markdownRaw} />
}
export default Page
