import { isDeepEqual } from '../isDeepEqual'

describe('isDeepEqual', () => {
  it('should return true for identical simple objects', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { a: 1, b: 2 }

    expect(isDeepEqual(obj1, obj2)).toBe(true)
  })

  it('should return false for objects with different values', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { a: 1, b: 3 }

    expect(isDeepEqual(obj1, obj2)).toBe(false)
  })

  it('should return false for objects with different keys', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { a: 1, c: 2 }

    expect(isDeepEqual(obj1, obj2)).toBe(false)
  })

  it('should return false for objects with different number of keys', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { a: 1, b: 2, c: 3 }

    expect(isDeepEqual(obj1, obj2)).toBe(false)
  })

  it('should handle nested objects', () => {
    const obj1 = { a: 1, b: { c: 2, d: 3 } }
    const obj2 = { a: 1, b: { c: 2, d: 3 } }

    expect(isDeepEqual(obj1, obj2)).toBe(true)
  })

  it('should return false for different nested objects', () => {
    const obj1 = { a: 1, b: { c: 2, d: 3 } }
    const obj2 = { a: 1, b: { c: 2, d: 4 } }

    expect(isDeepEqual(obj1, obj2)).toBe(false)
  })

  it('should handle deeply nested objects', () => {
    const obj1 = { a: { b: { c: { d: 1 } } } }
    const obj2 = { a: { b: { c: { d: 1 } } } }

    expect(isDeepEqual(obj1, obj2)).toBe(true)
  })

  it('should return false for non-objects', () => {
    expect(isDeepEqual(null, {})).toBe(false)
    expect(isDeepEqual({}, null)).toBe(false)
    expect(isDeepEqual('string', {})).toBe(false)
    expect(isDeepEqual(123, {})).toBe(false)
  })

  it('should return false when comparing null values', () => {
    expect(isDeepEqual(null, null)).toBe(false)
  })

  it('should handle empty objects', () => {
    expect(isDeepEqual({}, {})).toBe(true)
  })

  it('should handle objects with string values', () => {
    const obj1 = { name: 'John', age: '30' }
    const obj2 = { name: 'John', age: '30' }

    expect(isDeepEqual(obj1, obj2)).toBe(true)
  })

  it('should handle objects with boolean values', () => {
    const obj1 = { active: true, verified: false }
    const obj2 = { active: true, verified: false }

    expect(isDeepEqual(obj1, obj2)).toBe(true)
  })

  it('should distinguish between different types', () => {
    const obj1 = { value: '1' }
    const obj2 = { value: 1 }

    expect(isDeepEqual(obj1, obj2)).toBe(false)
  })
})
