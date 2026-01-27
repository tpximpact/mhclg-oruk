interface Node {
  label: string
  urlPath: string
  offsite?: boolean
  teaser?: string
}

interface MenuNode {
  title: string
  path: string
  offsite?: boolean
  slug?: string
}

export const formatNodesForPageMenu = (nodes: Node[]): MenuNode[] => {
  const result = nodes.map(node => {
    return {
      title: node.label,
      path: node.urlPath,
      offsite: node.offsite,
      slug: node.teaser
    }
  })

  return result
}
