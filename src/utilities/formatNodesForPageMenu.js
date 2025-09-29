export const formatNodesForPageMenu = nodes => {
	let result = nodes

	result = nodes.map(node => {
		return {
			title: node.label,
			path: node.urlPath,
			offsite: node.offsite,
			slug: node.teaser
		}
	})

	return result
}
