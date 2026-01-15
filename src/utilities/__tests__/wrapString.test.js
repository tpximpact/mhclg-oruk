import { wrapString } from '../wrapString'

describe('wrapString', () => {
  it('should wrap text to specified maximum length', () => {
    const text = 'This is a long sentence that needs to be wrapped'
    const result = wrapString(text, 20)

    expect(result).toEqual(['This is a long', 'sentence that needs', 'to be wrapped'])
  })

  it('should handle text shorter than maxLength', () => {
    const text = 'Short text'
    const result = wrapString(text, 50)

    expect(result).toEqual(['Short text'])
  })

  it('should handle single word longer than maxLength', () => {
    const text = 'Supercalifragilisticexpialidocious'
    const result = wrapString(text, 10)

    expect(result).toEqual(['Supercalifragilisticexpialidocious'])
  })

  it('should handle empty string', () => {
    const result = wrapString('', 20)
    expect(result).toEqual([])
  })

  it('should trim leading and trailing whitespace', () => {
    const text = '  This has spaces  '
    const result = wrapString(text, 20)

    expect(result).toEqual(['This has spaces'])
  })

  it('should handle multiple consecutive spaces', () => {
    const text = 'This    has    multiple    spaces'
    const result = wrapString(text, 20)

    expect(result).toEqual(['This has multiple', 'spaces'])
  })

  it('should wrap at word boundaries', () => {
    const text = 'one two three four five'
    const result = wrapString(text, 15)

    expect(result).toEqual(['one two three', 'four five'])
  })

  it('should handle exact length matches', () => {
    const text = 'exactly twenty chars'
    const result = wrapString(text, 20)

    expect(result).toEqual(['exactly twenty chars'])
  })
})
