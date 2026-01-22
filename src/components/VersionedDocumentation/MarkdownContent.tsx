export const MarkdownContent = ({ html }: { html: any }) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
)
