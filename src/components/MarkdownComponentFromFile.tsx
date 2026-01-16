import { getMarkdownData } from '@/utilities/markdown'
import { MarkdownComponent } from './NamedMarkdownPage/MarkdownContent'
import { HTMLAttributes } from 'react'

export const MarkdownComponentFromFile = async ({
  filePath,
  fileName,
  ...props
}: {
  filePath: string
  fileName: string
} & HTMLAttributes<HTMLDivElement>) => {
  const { content } = await getMarkdownData(filePath, fileName)

  return <MarkdownComponent html={content ?? ''} {...props} />
}
