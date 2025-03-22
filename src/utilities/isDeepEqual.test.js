import { isDeepEqual } from './isDeepEqual'

describe('isDeepEqual', () => {
  test('returns true for identical primitive values', () => {
    expect(isDeepEqual({ a: 1 }, { a: 1 })).toBe(true)
    expect(isDeepEqual({ a: 'string' }, { a: 'string' })).toBe(true)
    expect(isDeepEqual({ a: true }, { a: true })).toBe(true)
    expect(isDeepEqual({ a: null }, { a: null })).toBe(true)
  })

  test('returns false for different primitive values', () => {
    expect(isDeepEqual({ a: 1 }, { a: 2 })).toBe(false)
    expect(isDeepEqual({ a: 'string' }, { a: 'different' })).toBe(false)
    expect(isDeepEqual({ a: true }, { a: false })).toBe(false)
    expect(isDeepEqual({ a: null }, { a: undefined })).toBe(false)
  })

  test('returns false when comparing objects with different keys', () => {
    expect(isDeepEqual({ a: 1 }, { b: 1 })).toBe(false)
    expect(isDeepEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false)
    expect(isDeepEqual({ a: 1, b: 2 }, { a: 1 })).toBe(false)
  })

  test('returns true for nested objects with identical values', () => {
    const obj1 = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3
        }
      }
    }
    const obj2 = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3
        }
      }
    }
    expect(isDeepEqual(obj1, obj2)).toBe(true)
  })

  test('returns false for nested objects with different values', () => {
    const obj1 = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3
        }
      }
    }
    const obj2 = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 4
        }
      }
    }
    expect(isDeepEqual(obj1, obj2)).toBe(false)
  })

  test('returns false when comparing with non-objects', () => {
    expect(isDeepEqual({}, null)).toBe(false)
    expect(isDeepEqual(null, {})).toBe(false)
    expect(isDeepEqual({}, undefined)).toBe(false)
    expect(isDeepEqual(undefined, {})).toBe(false)
    expect(isDeepEqual({}, 42)).toBe(false)
    expect(isDeepEqual(42, {})).toBe(false)
    expect(isDeepEqual({}, 'string')).toBe(false)
    expect(isDeepEqual('string', {})).toBe(false)
  })

  test('returns true for empty objects', () => {
    expect(isDeepEqual({}, {})).toBe(true)
  })

  test('handles arrays as objects correctly', () => {
    expect(isDeepEqual([1, 2, 3], [1, 2, 3])).toBe(true)
    expect(isDeepEqual([1, 2, 3], [1, 2, 4])).toBe(false)
    expect(isDeepEqual([1, { a: 2 }], [1, { a: 2 }])).toBe(true)
    expect(isDeepEqual([1, { a: 2 }], [1, { a: 3 }])).toBe(false)
  })
}) 