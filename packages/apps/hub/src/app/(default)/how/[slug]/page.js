import { slugsFrom, readFile } from '@/util/content'
import { PATHS } from '@/util/paths'

const SUBFOLDER = PATHS.how

export const generateStaticParams = () => slugsFrom(SUBFOLDER)

const Page = ({ params }) => {
	const { slug } = params
	const markdownRaw = readFile({
		slug: slug,
		folder: SUBFOLDER
	})
	return <div>{markdownRaw}</div>
}
export default Page
