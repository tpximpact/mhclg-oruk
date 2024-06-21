import { slugsFrom, readFile } from '../../../util/content'
import { PATHS } from '../../../util/paths'
import { FILE_EXTENSION } from '../../../util/markdown'

const SUBFOLDER = PATHS.developer

export const generateStaticParams = () => slugsFrom(SUBFOLDER, FILE_EXTENSION)

const Page = ({ params }) => {
	const { slug } = params
	const markdownRaw = readFile({ file: `${slug}.${FILE_EXTENSION}`, folder: SUBFOLDER })
	return <div>{markdownRaw}</div>
}
export default Page
