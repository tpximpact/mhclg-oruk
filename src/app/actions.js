'use server'

import { z } from 'zod'
import { revalidatePath } from 'next/cache'
import { fromErrorToFormState, toFormState } from '@/utilities/to-form-state'

let messages = null
/*{
    id: crypto.randomUUID(),
    text: 'First Message',
  },
  {
    id: crypto.randomUUID(),
    text: 'Second Message',
  },
  {
    id: crypto.randomUUID(),
    text: 'Third Message',
  },
];*/

export const getMessages = async () => {
	await new Promise(resolve => setTimeout(resolve, 250))

	return Promise.resolve(messages)
}

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
	let data, values

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

		if (!messages) {
			messages = []
		}
		messages.push({
			id: crypto.randomUUID(),
			title: formData.get('name'),
			text: JSON.stringify(content)
		})
	} catch (error) {
		return toFormState('Error', 'Error')
	}

	revalidatePath('/developers/register')

	return toFormState('SUCCESS', 'Registration requested')
}
