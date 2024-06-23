import { readFile } from '@/util/content'
import { PATHS } from '@/util/paths'
import { marked } from 'marked'

const SUBFOLDER = PATHS.about

const Page = () => {
	const markdownRaw = readFile({
		folder: SUBFOLDER
	})
	return  <PageMarkdown raw={markdownRaw}/>
}
export default Page

const PageMarkdown = ({raw}) => {
	const markup = { __html: marked.parse(raw) }
	return <main dangerouslySetInnerHTML={markup} />
}