'use server'

import { getNamedSiteItem } from '@/utilities/getNamedSiteItem'

interface MarkdownErrorProps {
  file: string
}

export const MarkdownError = async ({ file }: MarkdownErrorProps) => {
  const pageData = getNamedSiteItem(file)
  return (
    <div>
      Sorry, the requested content file <span style={{ fontStyle: 'italic' }}>{file}</span> (
      {pageData?.name}) could not be read
    </div>
  )
}
