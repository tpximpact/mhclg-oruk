import { configValueToBoolean } from './configValueToBoolean';

describe('configValueToBoolean', () => {
	test('should return false for non-string values', () => {
		expect(configValueToBoolean(null)).toBe(false);
		expect(configValueToBoolean(undefined)).toBe(false);
		expect(configValueToBoolean(123)).toBe(false);
		expect(configValueToBoolean({})).toBe(false);
		expect(configValueToBoolean([])).toBe(false);
	});

	test('should return true for "true" string', () => {
		expect(configValueToBoolean('true')).toBe(true);
		expect(configValueToBoolean(' TRUE ')).toBe(true);
	});

	test('should return false for "false" string', () => {
		expect(configValueToBoolean('false')).toBe(false);
		expect(configValueToBoolean(' FALSE ')).toBe(false);
	});

	test('should return false for empty string', () => {
		expect(configValueToBoolean('')).toBe(false);
	});

	test('should return false for invalid JSON strings', () => {
		expect(configValueToBoolean('not a json')).toBe(false);
	});

	test('should return true for valid JSON true', () => {
		expect(configValueToBoolean('true')).toBe(true);
	});

	test('should return false for valid JSON false', () => {
		expect(configValueToBoolean('false')).toBe(false);
	});
});
