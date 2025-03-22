import { configValueToBoolean } from './configValueToBoolean'

describe('configValueToBoolean', () => {
	test('should return false for falsy values', () => {
		expect(configValueToBoolean(null)).toBe(false)
		expect(configValueToBoolean(undefined)).toBe(false)
		expect(configValueToBoolean('')).toBe(false)
		expect(configValueToBoolean(0)).toBe(false)
	})

	test('should correctly parse string "true"', () => {
		expect(configValueToBoolean('true')).toBe(true)
		expect(configValueToBoolean('TRUE')).toBe(true)
		expect(configValueToBoolean('True')).toBe(true)
	})

	test('should correctly parse string "false"', () => {
		expect(configValueToBoolean('false')).toBe(false)
		expect(configValueToBoolean('FALSE')).toBe(false)
		expect(configValueToBoolean('False')).toBe(false)
	})

	test('should throw for invalid JSON strings', () => {
		expect(() => configValueToBoolean('invalid')).toThrow()
		expect(() => configValueToBoolean('yes')).toThrow()
		expect(() => configValueToBoolean('no')).toThrow()
	})
})
