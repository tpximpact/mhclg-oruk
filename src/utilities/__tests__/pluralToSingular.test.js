import { pluralToSingular } from '../pluralToSingular'

describe('pluralToSingular', () => {
  it('should convert words ending in "ies" to "y"', () => {
    expect(pluralToSingular('cities')).toBe('city')
    expect(pluralToSingular('companies')).toBe('company')
    expect(pluralToSingular('categories')).toBe('category')
  })

  it('should convert words ending in "ves" to "f"', () => {
    expect(pluralToSingular('wolves')).toBe('wolve')
    expect(pluralToSingular('knives')).toBe('knive')
    expect(pluralToSingular('lives')).toBe('live')
  })

  it('should handle words ending in "es"', () => {
    expect(pluralToSingular('addresses')).toBe('address')
    expect(pluralToSingular('boxes')).toBe('boxe')
  })

  it('should remove trailing "s" for regular plurals', () => {
    expect(pluralToSingular('cars')).toBe('car')
    expect(pluralToSingular('dogs')).toBe('dog')
    expect(pluralToSingular('services')).toBe('service')
  })

  it('should return the original string if no plural pattern matches', () => {
    expect(pluralToSingular('sheep')).toBe('sheep')
    expect(pluralToSingular('data')).toBe('data')
  })

  it('should handle empty strings', () => {
    expect(pluralToSingular('')).toBe('')
  })

  it('should handle single character strings', () => {
    expect(pluralToSingular('s')).toBe('')
    expect(pluralToSingular('a')).toBe('a')
  })

  it('should handle organization_details nested arrays', () => {
    expect(pluralToSingular('service')).toBe('service')
    expect(pluralToSingular('services')).toBe('service')
    expect(pluralToSingular('reviews')).toBe('review')
  })

  it('should handle location_details nested arrays', () => {
    expect(pluralToSingular('service_at_locations')).toBe('service_at_location')
    expect(pluralToSingular('physical_addresses')).toBe('physical_address')
  })
})
