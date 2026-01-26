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

type CreateMessageValues = z.infer<typeof createMessageSchema>

interface FormState {
  status: string
  message: string
  fieldErrors?: Record<string, string[]>
  updateLink?: string
  timestamp?: number
}

export const createMessage = async (
  _formState: FormState,
  formData: FormData
): Promise<FormState> => {
  const URL = process.env.REGISTER_ENDPOINT
  let data: CreateMessageValues
  let values: Partial<CreateMessageValues> = {}
  let updateLink: string | undefined

  try {
    values = {
      name: formData.get('name') as string,
      publisher: formData.get('publisher') as string,
      publisherUrl: formData.get('publisherUrl') as string,
      description: formData.get('description') as string,
      developer: formData.get('developer') as string,
      developerUrl: formData.get('developerUrl') as string,
      serviceUrl: formData.get('serviceUrl') as string,
      contactEmail: formData.get('contactEmail') as string
    }
    data = createMessageSchema.parse(values)
  } catch (error) {
    return fromErrorToFormState(error, values)
  }

  try {
    const rawResponse = await fetch(URL!, {
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

  const result: FormState = toFormState('SUCCESS', 'Registration requested')
  result.updateLink = updateLink
  return result
}
