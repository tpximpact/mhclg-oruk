'use server'

import { z } from 'zod'
import { revalidatePath } from 'next/cache'
import { fromErrorToFormState, toFormState } from '@/utilities/to-form-state'

const createMessageSchema = z.object({
	name: z.string().min(1).max(191),
	publisher: z.string().min(1).max(191),
	publisherUrl: z.string().min(1).max(191),
	description: z.string().min(1).max(1024),
	developer: z.string().min(1).max(191),
	developerUrl: z.string().min(1).max(191),
	serviceUrl: z.string().min(1).max(191),
	contactEmail: z.string().min(1).max(191)
})

export const createMessage = async (formState, formData) => {
	const URL = process.env.REGISTER_ENDPOINT
	let data, values, updateLink

	try {
		values = {
			name: formData.get('name'),
			publisher: formData.get('publisher'),
			publisherUrl: formData.get('publisherUrl'),
			description: formData.get('description'),
			developer: formData.get('developer'),
			developerUrl: formData.get('developerUrl'),
			serviceUrl: formData.get('serviceUrl'),
			contactEmail: formData.get('contactEmail')
		}
		data = createMessageSchema.parse(values)
	} catch (error) {
		return fromErrorToFormState(error, values)
	}

	try {
		const rawResponse = await fetch(URL, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		const content = await rawResponse.json()
		updateLink = content.updateLink
	} catch (error) {
		return toFormState('Error', 'Error')
	}

	revalidatePath('/developers/register')

	let result = toFormState('SUCCESS', 'Registration requested')
	result.updateLink = updateLink
	return result
}
