import { readFile } from '@/util/content'
import { PATHS } from '@/util/paths'
import { MarkdownContent } from '@/components/MarkdownContent'
import { Header } from '@/components/Header'

const SUBFOLDER = PATHS.about

const Page = () => {
	const markdownRaw = readFile({
		folder: SUBFOLDER
	})
	return (
		<>
			<Header selected={SUBFOLDER} />
			<MarkdownContent raw={markdownRaw} />
		</>
	)
}
export default Page
