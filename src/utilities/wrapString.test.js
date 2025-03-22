import { wrapString } from './wrapString'

describe('wrapString', () => {
  test('wraps text at specified length', () => {
    const text = 'This is a test string that needs to be wrapped'
    const result = wrapString(text, 10)
    expect(result).toEqual([
      'This is a',
      'test',
      'string',
      'that needs',
      'to be',
      'wrapped'
    ])
  })

  test('handles empty string', () => {
    const result = wrapString('', 10)
    expect(result).toEqual([])
  })

  test('handles string with only spaces', () => {
    const result = wrapString('   ', 10)
    expect(result).toEqual([])
  })

  test('handles single word shorter than maxLength', () => {
    const result = wrapString('hello', 10)
    expect(result).toEqual(['hello'])
  })

  test('handles single word longer than maxLength', () => {
    const result = wrapString('supercalifragilistic', 5)
    expect(result).toEqual(['supercalifragilistic'])
  })

  test('handles multiple spaces between words', () => {
    const result = wrapString('word1    word2     word3', 10)
    expect(result).toEqual([
      'word1',
      'word2',
      'word3'
    ])
  })

  test('wraps at exact maxLength', () => {
    const result = wrapString('one two three four', 7)
    expect(result).toEqual([
      'one two',
      'three',
      'four'
    ])
  })

  test('handles leading and trailing spaces', () => {
    const result = wrapString('   trim this text   ', 10)
    expect(result).toEqual([
      'trim this',
      'text'
    ])
  })
}) 