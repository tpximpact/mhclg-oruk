/**
 * Expands the tree structure.
 *
 * @param {Array} structure - The tree structure to expand.
 * @param {Object} [parentNode] - The parent node.
 * @returns {Array} - The expanded tree structure.
 */
export const expandTree = (structure, parentNode) => {
	return structure.reduce((acc, node) => {
		const updatedNode = { ...node }

		if (parentNode) {
			updatedNode.parentNodeName = parentNode.name
			if (!node.offsite) {
				updatedNode.urlPath = `${parentNode.urlPath}/${node.urlPath}`
			}
		}

		if (node.childNodes) {
			acc.push(...expandTree(node.childNodes, updatedNode))
		}

		return [...acc, { ...updatedNode, childNodes: undefined }]
	}, [])
}
