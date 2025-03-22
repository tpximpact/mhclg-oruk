import { pluralToSingular } from './pluralToSingular'

// this is a pretty naive implementation - you could easily write lots of failing cases...

describe('pluralToSingular', () => {
	// Test words ending in 'ies'
	test('converts words ending in "ies" to "y"', () => {
		expect(pluralToSingular('cities')).toBe('city')
		expect(pluralToSingular('countries')).toBe('country')
		expect(pluralToSingular('properties')).toBe('property')
	})

	// Test regular plural words ending in 's'
	test('removes trailing "s" from regular plural words', () => {
		expect(pluralToSingular('cars')).toBe('car')
		expect(pluralToSingular('books')).toBe('book')
		expect(pluralToSingular('phones')).toBe('phone')
	})

	// Test edge cases
	test('handles edge cases correctly', () => {
		expect(pluralToSingular('')).toBe('')
		expect(pluralToSingular('s')).toBe('')
		expect(pluralToSingular('es')).toBe('e')
	})
})
