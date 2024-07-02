import { readFile } from '@/util/content'
import { PATHS } from '@/util/paths'
import { MarkdownContent } from '@/components/MarkdownContent'
import { Header } from '@/components/Header'
import { Main } from '@tpx/Main'

const SUBFOLDER = PATHS.about

const Page = () => {
	const markdownRaw = readFile({
		folder: SUBFOLDER
	})
	return (
		<>
			<Header selected={SUBFOLDER} />
			<Main>
				<MarkdownContent raw={markdownRaw} autoMenu={true}/>
			</Main>
		</>
	)
}
export default Page
