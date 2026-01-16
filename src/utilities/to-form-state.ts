import { ZodError } from 'zod'

export interface FormState {
	status: string
	message: string
	formData?: any
	fieldErrors: Record<string, string[] | undefined>
	timestamp: number
	updateLink?: string
}

export const EMPTY_FORM_STATE: FormState = {
	status: 'UNSET',
	message: '',
	formData: null,
	fieldErrors: {},
	timestamp: Date.now()
}

export const fromErrorToFormState = (error: unknown, formData?: any): FormState => {
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

export const toFormState = (status: string, message: string): FormState => {
	return {
		status,
		message,
		fieldErrors: {},
		timestamp: Date.now()
	}
}
