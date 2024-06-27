import { slugsFrom, readFile } from '@/util/content'
//import { PATHS } from '@/util/paths'

const SUBFOLDER = '/community/case-studies'

export const generateStaticParams = () => slugsFrom(SUBFOLDER)

const Page = ({ params }) => {
	const { slug } = params
	const markdownRaw = readFile({
		slug: slug,
		folder: SUBFOLDER
	})
	return (
		<>
			<main>
				<div>{markdownRaw}</div>
				<div>
					<h2>Related case studies</h2>
				</div>
				<div>
					<h2>Contact us to share your case study</h2>
				</div>
			</main>
		</>
	)
}
export default Page
