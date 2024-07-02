import { slugsFrom, readFile, PATHS } from '@/util/content'

const SUBFOLDER = PATHS.developer

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
