import { configValueToBoolean } from '../configValueToBoolean'

describe('configValueToBoolean', () => {
  it('should return true for string "true"', () => {
    expect(configValueToBoolean('true')).toBe(true)
  })

  it('should return false for string "false"', () => {
    expect(configValueToBoolean('false')).toBe(false)
  })

  it('should handle uppercase strings', () => {
    expect(configValueToBoolean('TRUE')).toBe(true)
    expect(configValueToBoolean('FALSE')).toBe(false)
  })

  it('should handle mixed case strings', () => {
    expect(configValueToBoolean('True')).toBe(true)
    expect(configValueToBoolean('False')).toBe(false)
  })

  it('should return false for null', () => {
    expect(configValueToBoolean(null)).toBe(false)
  })

  it('should return false for undefined', () => {
    expect(configValueToBoolean(undefined)).toBe(false)
  })

  it('should return false for empty string', () => {
    expect(configValueToBoolean('')).toBe(false)
  })

  it('should return false for 0', () => {
    expect(configValueToBoolean(0)).toBe(false)
  })

  it('should throw error for invalid JSON values', () => {
    expect(() => configValueToBoolean('invalid')).toThrow()
    expect(() => configValueToBoolean('yes')).toThrow()
  })
})
