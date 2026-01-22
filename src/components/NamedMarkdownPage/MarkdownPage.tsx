import { MarkdownContent } from './MarkdownContent'
import { MarkdownError } from './MarkdownError'
import { ReactNode } from 'react'

interface MarkdownPageProps {
  autoMenu?: boolean
  children?: ReactNode
  html?: string
  file?: string
}

export const MarkdownPage = ({ autoMenu = true, children, html, file }: MarkdownPageProps) => {
  return (
    <>
      {html ? (
        <MarkdownContent html={html} autoMenu={autoMenu} />
      ) : (
        <MarkdownError file={file ?? ''} />
      )}
      {children}
    </>
  )
}
