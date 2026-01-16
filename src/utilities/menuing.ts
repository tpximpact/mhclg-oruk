interface Node {
	offsite?: boolean
	contentPath: string
	urlPath: string
	childNodes?: Node[]
	[key: string]: any
}

const expandPaths = (node: Node, parentNode: Node | null): Node => {
	// if this node is offsite, nothing to do
	if (node.offsite) return node

	// expand paths in this node
	if (parentNode) {
		node.contentPath = parentNode.contentPath + '/' + node.contentPath
		node.urlPath = parentNode.urlPath + '/' + node.urlPath
	}

	// recurse over children
	if (node.childNodes) {
		node.childNodes = node.childNodes.map(child => expandPaths(child, node))
	}

	// done
	return node
}

export const siteStructureWithFullPaths = (structure: Node[]): Node[] => {
	const result = JSON.parse(JSON.stringify(structure))
	result.map((node: Node) => expandPaths(node, null))
	return result
}

const flatten = (a: any[], parent?: any): any[] => {
	a = JSON.parse(JSON.stringify(a))
	if (parent) {
		parent = JSON.parse(JSON.stringify(parent))
	}
	let result: any[] = []
	a.forEach(item => {
		let items: any[] = []
		if (parent) {
			item.parent = parent.name
			if (!item.offsite) {
				item.urlPath = parent.urlPath + '/' + item.urlPath
				item.contentPath = parent.contentPath + '/' + item.contentPath
			}
		}
		if (item.children) {
			items = flatten(item.children, item)
			item.children = item.children.map((child: any) => child.name)
		}
		items.push(item)
		result = result.concat(items)
	})
	return result
}
