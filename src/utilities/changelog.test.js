import { getChangelogData } from './changelog'

// Mock the data import
jest.mock('../../content/developers/changelog/data.json', () => ({
	__esModule: true,
	default: [
		{
			version: '1.0.0',
			changes: ['Test change 1', 'Test change 2']
		}
	]
}))

describe('changelog utilities', () => {
	describe('getChangelogData', () => {
		it('should return the changelog data', () => {
			const result = getChangelogData()

			expect(result).toEqual([
				{
					version: '1.0.0',
					changes: ['Test change 1', 'Test change 2']
				}
			])
		})
	})
})
