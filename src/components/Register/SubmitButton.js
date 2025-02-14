'use client'

import { useFormStatus } from 'react-dom'


export const SubmitButton = ({ label, loading }) => {
  const { pending } = useFormStatus()

  return (
    <button disabled={pending} type="submit" >
      {pending ? loading : label}
    </button>
  )
}
