import { groupBy } from './groupBy'

describe('groupBy', () => {
	test('groups array of objects by specified property', () => {
		const input = [
			{ id: 1, category: 'A', value: 'first' },
			{ id: 2, category: 'B', value: 'second' },
			{ id: 3, category: 'A', value: 'third' },
			{ id: 4, category: 'B', value: 'fourth' }
		]

		const result = groupBy(input, 'category')

		expect(result).toEqual({
			A: [
				{ id: 1, category: 'A', value: 'first' },
				{ id: 3, category: 'A', value: 'third' }
			],
			B: [
				{ id: 2, category: 'B', value: 'second' },
				{ id: 4, category: 'B', value: 'fourth' }
			]
		})
	})

	test('handles empty array', () => {
		const input = []
		const result = groupBy(input, 'category')
		expect(result).toEqual({})
	})

	test('groups by numeric property', () => {
		const input = [
			{ id: 1, score: 100 },
			{ id: 2, score: 200 },
			{ id: 3, score: 100 }
		]

		const result = groupBy(input, 'score')

		expect(result).toEqual({
			100: [
				{ id: 1, score: 100 },
				{ id: 3, score: 100 }
			],
			200: [{ id: 2, score: 200 }]
		})
	})

	test('handles undefined property values', () => {
		const input = [{ id: 1, type: 'A' }, { id: 2 }, { id: 3, type: 'B' }, { id: 4 }]

		const result = groupBy(input, 'type')

		expect(result).toEqual({
			A: [{ id: 1, type: 'A' }],
			B: [{ id: 3, type: 'B' }],
			undefined: [{ id: 2 }, { id: 4 }]
		})
	})
})
