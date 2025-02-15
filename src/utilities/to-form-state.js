import { ZodError } from 'zod'

export const EMPTY_FORM_STATE = {
	status: 'UNSET',
	message: '',
	formData: null,
	fieldErrors: {},
	timestamp: Date.now()
}

export const fromErrorToFormState = (error, formData) => {
	if (error instanceof ZodError) {
		return {
			status: 'ERROR',
			message: '',
			formData: formData,
			fieldErrors: error.flatten().fieldErrors,
			timestamp: Date.now()
		}
	} else if (error instanceof Error) {
		return {
			status: 'ERROR',
			message: error.message,
			formData: formData,
			fieldErrors: {},
			timestamp: Date.now()
		}
	} else {
		return {
			status: 'ERROR',
			message: 'An unknown error occurred',
			formData: formData,
			fieldErrors: {},
			timestamp: Date.now()
		}
	}
}

export const toFormState = (status, message) => {
	return {
		status,
		message,
		fieldErrors: {},
		timestamp: Date.now()
	}
}
