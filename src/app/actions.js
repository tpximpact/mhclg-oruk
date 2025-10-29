'use server'

import { z } from 'zod'
import { revalidatePath } from 'next/cache'
import { fromErrorToFormState, toFormState } from '@/utilities/to-form-state'
import { ServiceRepository } from '@/repositories/service-repository'
import { ValidationError } from '@/lib/mongodb-errors'

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
		// Save service using repository
		const serviceRepo = new ServiceRepository()
		const service = await serviceRepo.create({
			...data,
			createdAt: new Date(),
			updatedAt: new Date()
		})

		// Get update link from response
		updateLink = service.updateLink
	} catch (error) {
		if (error instanceof ValidationError) {
			return fromErrorToFormState(error, values)
		}
		return toFormState('ERROR', 'Failed to save service')
	}

	revalidatePath('/developers/register')

	let result = toFormState('SUCCESS', 'Service requested')
	result.updateLink = updateLink
	return result
}
