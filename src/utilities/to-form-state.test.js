import { ZodError } from 'zod'
import { EMPTY_FORM_STATE, fromErrorToFormState, toFormState } from './to-form-state'

describe('Form State Utilities', () => {
	describe('EMPTY_FORM_STATE', () => {
		it('should have the correct initial structure', () => {
			expect(EMPTY_FORM_STATE).toEqual({
				status: 'UNSET',
				message: '',
				formData: null,
				fieldErrors: {},
				timestamp: expect.any(Number)
			})
		})
	})

	describe('fromErrorToFormState', () => {
		const mockFormData = { name: 'test' }

		it('should handle ZodError correctly', () => {
			const zodError = new ZodError([
				{
					code: 'invalid_type',
					expected: 'string',
					received: 'number',
					path: ['name'],
					message: 'Expected string, received number'
				}
			])

			const result = fromErrorToFormState(zodError, mockFormData)

			expect(result).toEqual({
				status: 'ERROR',
				message: '',
				formData: mockFormData,
				fieldErrors: expect.any(Object),
				timestamp: expect.any(Number)
			})
		})

		it('should handle standard Error correctly', () => {
			const error = new Error('Test error message')
			const result = fromErrorToFormState(error, mockFormData)

			expect(result).toEqual({
				status: 'ERROR',
				message: 'Test error message',
				formData: mockFormData,
				fieldErrors: {},
				timestamp: expect.any(Number)
			})
		})

		it('should handle unknown errors correctly', () => {
			const result = fromErrorToFormState('Unknown error', mockFormData)

			expect(result).toEqual({
				status: 'ERROR',
				message: 'An unknown error occurred',
				formData: mockFormData,
				fieldErrors: {},
				timestamp: expect.any(Number)
			})
		})
	})

	describe('toFormState', () => {
		it('should create a form state with given status and message', () => {
			const result = toFormState('SUCCESS', 'Operation completed')

			expect(result).toEqual({
				status: 'SUCCESS',
				message: 'Operation completed',
				fieldErrors: {},
				timestamp: expect.any(Number)
			})
		})

		it('should create a form state with empty message', () => {
			const result = toFormState('PENDING', '')

			expect(result).toEqual({
				status: 'PENDING',
				message: '',
				fieldErrors: {},
				timestamp: expect.any(Number)
			})
		})
	})
})
