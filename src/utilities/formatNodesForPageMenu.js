
export const formatNodesForPageMenu = nodes => {
	let result = nodes
	/*
	from

	{
		"name":"directory",
		"label":"Service Directory",
		"urlPath":"undefined/directory",
		"contentPath":"/community/directory",
		"parent":"community"
	}


	to

    {
        "title":"News Story One",
        "path":"updates/0001",
        "date":"11/10/2024",
        "slug":"This story has a brief description / preview of its contents."
    }
	*/

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
