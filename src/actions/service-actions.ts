'use server'

import { revalidatePath } from 'next/cache'
import { fromErrorToFormState, toFormState } from '@/utilities/to-form-state'
import { ServiceRepository } from '@/repositories/service-repository'
import { ValidationError } from '@/lib/mongodb-errors'
import { serviceInputSchema, type ServiceInput } from '@/models/service'
import { GitHubService } from '@/lib/github-service'

export const createMessage = async (
  formState: any,
  formData: FormData
): Promise<any> => {
  let data: ServiceInput
  let values: Record<string, unknown> | undefined
  let updateLink: string | undefined

  try {
    values = {
      name: formData.get('name'),
      publisher: formData.get('publisher'),
      publisherUrl: formData.get('publisherUrl'),
      description: formData.get('description'),
      developer: formData.get('developer'),
      developerUrl: formData.get('developerUrl'),
      serviceUrl: formData.get('serviceUrl'),
      contactEmail: formData.get('contactEmail'),
    }
    data = serviceInputSchema.parse(values)
  } catch (error) {
    return fromErrorToFormState(error as Error, values)
  }

  try {
    // Save service using repository
    const serviceRepo = new ServiceRepository()
    const service = await serviceRepo.create({
      ...data,
    })

    // Get update link from response
    // The response type includes updateLink
    updateLink = service.updateLink

    // Create GitHub issue for manual verification
    try {
      const githubService = new GitHubService()
      const issue = await githubService.createVerificationIssue({
        id: service.id,
        name: service.name,
        publisher: service.publisher,
        publisherUrl: service.publisherUrl,
        description: service.description,
        developer: service.developer,
        developerUrl: service.developerUrl,
        serviceUrl: service.serviceUrl,
        contactEmail: service.contactEmail,
        createdAt: service.createdAt,
        updateLink: service.updateLink,
      })
      
      console.log(`Created GitHub issue #${issue.number} for service verification: ${issue.url}`)
    } catch (githubError) {
      // Log the error but don't fail the entire operation
      // The service was successfully created, GitHub issue creation is supplementary
      console.error('Failed to create GitHub issue for service verification:', githubError)
    }
  } catch (error) {
    if (error instanceof ValidationError) {
      return fromErrorToFormState(error, values)
    }
    return toFormState('ERROR', 'Failed to save service')
  }

  revalidatePath('/developers/register')

  const result: any = toFormState('SUCCESS', 'Service requested')
  ;(result as any).updateLink = updateLink
  return result
}
