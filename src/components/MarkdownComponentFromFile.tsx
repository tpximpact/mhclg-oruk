import { getMarkdownData } from '@/utilities/markdown'
import { MarkdownComponent } from './NamedMarkdownPage/MarkdownContent'

export const MarkdownComponentFromFile = async ({
	filePath,
	fileName
}: {
	filePath: string
	fileName: string
}) => {
	const { content } = await getMarkdownData(filePath, fileName)

	return <MarkdownComponent html={content} />
}
