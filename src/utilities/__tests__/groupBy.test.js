import { groupBy } from '../groupBy'

describe('groupBy', () => {
  it('should group array elements by a specified property', () => {
    const array = [
      { category: 'fruit', name: 'apple' },
      { category: 'fruit', name: 'banana' },
      { category: 'vegetable', name: 'carrot' }
    ]

    const result = groupBy(array, 'category')

    expect(result).toEqual({
      fruit: [
        { category: 'fruit', name: 'apple' },
        { category: 'fruit', name: 'banana' }
      ],
      vegetable: [{ category: 'vegetable', name: 'carrot' }]
    })
  })

  it('should return empty object for empty array', () => {
    const result = groupBy([], 'category')
    expect(result).toEqual({})
  })

  it('should handle single item', () => {
    const array = [{ type: 'a', value: 1 }]
    const result = groupBy(array, 'type')
    expect(result).toEqual({ a: [{ type: 'a', value: 1 }] })
  })

  it('should handle numeric property values', () => {
    const array = [
      { age: 25, name: 'John' },
      { age: 30, name: 'Jane' },
      { age: 25, name: 'Bob' }
    ]

    const result = groupBy(array, 'age')

    expect(result).toEqual({
      25: [
        { age: 25, name: 'John' },
        { age: 25, name: 'Bob' }
      ],
      30: [{ age: 30, name: 'Jane' }]
    })
  })

  it('should handle undefined property values', () => {
    const array = [{ category: 'a', name: 'item1' }, { name: 'item2' }]

    const result = groupBy(array, 'category')

    expect(result).toEqual({
      a: [{ category: 'a', name: 'item1' }],
      undefined: [{ name: 'item2' }]
    })
  })
})
