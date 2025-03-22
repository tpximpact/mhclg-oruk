import { expandTree } from './expandTree'

describe('expandTree', () => {
	test('should handle empty structure', () => {
		const result = expandTree([])
		expect(result).toEqual([])
	})

	test('should process flat structure without parent node', () => {
		const structure = [
			{ name: 'node1', urlPath: 'path1' },
			{ name: 'node2', urlPath: 'path2' }
		]
		const result = expandTree(structure)
		expect(result).toEqual([
			{ name: 'node1', urlPath: 'path1', childNodes: undefined },
			{ name: 'node2', urlPath: 'path2', childNodes: undefined }
		])
	})

	test('should process nested structure with parent nodes', () => {
		const structure = [
			{
				name: 'parent',
				urlPath: 'parent-path',
				childNodes: [
					{ name: 'child1', urlPath: 'child1-path' },
					{ name: 'child2', urlPath: 'child2-path' }
				]
			}
		]
		const result = expandTree(structure)
		expect(result).toEqual([
			{
				name: 'child1',
				urlPath: 'parent-path/child1-path',
				parentNodeName: 'parent',
				childNodes: undefined
			},
			{
				name: 'child2',
				urlPath: 'parent-path/child2-path',
				parentNodeName: 'parent',
				childNodes: undefined
			},
			{ name: 'parent', urlPath: 'parent-path', childNodes: undefined }
		])
	})

	test('should handle offsite nodes correctly', () => {
		const structure = [
			{
				name: 'parent',
				urlPath: 'parent-path',
				childNodes: [
					{ name: 'child1', urlPath: 'https://external.com', offsite: true },
					{ name: 'child2', urlPath: 'child2-path' }
				]
			}
		]
		const result = expandTree(structure)
		expect(result).toEqual([
			{
				name: 'child1',
				urlPath: 'https://external.com',
				offsite: true,
				parentNodeName: 'parent',
				childNodes: undefined
			},
			{
				name: 'child2',
				urlPath: 'parent-path/child2-path',
				parentNodeName: 'parent',
				childNodes: undefined
			},
			{ name: 'parent', urlPath: 'parent-path', childNodes: undefined }
		])
	})

	test('should handle deeply nested structures', () => {
		const structure = [
			{
				name: 'root',
				urlPath: 'root',
				childNodes: [
					{
						name: 'level1',
						urlPath: 'level1',
						childNodes: [{ name: 'level2', urlPath: 'level2' }]
					}
				]
			}
		]
		const result = expandTree(structure)
		expect(result).toEqual([
			{
				name: 'level2',
				urlPath: 'root/level1/level2',
				parentNodeName: 'level1',
				childNodes: undefined
			},
			{ name: 'level1', urlPath: 'root/level1', parentNodeName: 'root', childNodes: undefined },
			{ name: 'root', urlPath: 'root', childNodes: undefined }
		])
	})
})
