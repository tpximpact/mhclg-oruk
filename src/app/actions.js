'use server'

import { z } from 'zod'
import { revalidatePath } from 'next/cache'
import { fromErrorToFormState, toFormState } from '@/utilities/to-form-state'
import { getCollection } from '@/lib/mongodb'
import { insertRegistrationSchema } from '@/models/registration'

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
		// Validate and prepare data with timestamps
		const registrationData = insertRegistrationSchema.parse({
			...data,
			createdAt: new Date(),
			updatedAt: new Date()
		})

		// Save to MongoDB
		const registrations = await getCollection('registrations')
		const insertResult = await registrations.insertOne(registrationData)

		// Generate update link from inserted data
		updateLink = `/developers/register/${insertResult.insertedId.toHexString()}`
	} catch (error) {
		return toFormState('ERROR', 'Failed to save registration')
	}

	revalidatePath('/developers/register')

	let result = toFormState('SUCCESS', 'Registration requested')
	result.updateLink = updateLink
	return result
}
