'use server'

import { redirect } from 'next/navigation'

export async function navigate(data: FormData): Promise<void> {
  const uri = data.get('uri') as string
  const id = data.get('id') as string
  const querystring = `?uri=${uri}`
  redirect(`/developers/validator/${id}${querystring}`)
}
