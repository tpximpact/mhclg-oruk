import { formatNodesForPageMenu } from './formatNodesForPageMenu'

describe('formatNodesForPageMenu', () => {
	it('should transform node data to the expected format', () => {
		const input = [
			{
				name: 'directory',
				label: 'Service Directory',
				urlPath: 'undefined/directory',
				contentPath: '/community/directory',
				parent: 'community',
				teaser: 'A directory of services'
			}
		]

		const expected = [
			{
				title: 'Service Directory',
				path: 'undefined/directory',
				offsite: undefined,
				slug: 'A directory of services'
			}
		]

		expect(formatNodesForPageMenu(input)).toEqual(expected)
	})

	it('should handle multiple nodes', () => {
		const input = [
			{
				name: 'page1',
				label: 'Page One',
				urlPath: '/page-one',
				teaser: 'First page description',
				offsite: false
			},
			{
				name: 'page2',
				label: 'Page Two',
				urlPath: '/page-two',
				teaser: 'Second page description',
				offsite: true
			}
		]

		const expected = [
			{
				title: 'Page One',
				path: '/page-one',
				offsite: false,
				slug: 'First page description'
			},
			{
				title: 'Page Two',
				path: '/page-two',
				offsite: true,
				slug: 'Second page description'
			}
		]

		expect(formatNodesForPageMenu(input)).toEqual(expected)
	})

	it('should handle empty input array', () => {
		expect(formatNodesForPageMenu([])).toEqual([])
	})

	it('should handle nodes with missing optional properties', () => {
		const input = [
			{
				name: 'minimal',
				label: 'Minimal Page',
				urlPath: '/minimal'
			}
		]

		const expected = [
			{
				title: 'Minimal Page',
				path: '/minimal',
				offsite: undefined,
				slug: undefined
			}
		]

		expect(formatNodesForPageMenu(input)).toEqual(expected)
	})
})
