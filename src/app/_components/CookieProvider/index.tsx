'use client'

import { CookiesProvider } from 'react-cookie'
import { ReactNode } from 'react'

interface CookieProviderProps {
  children: ReactNode
}

export const CookieProvider = ({ children }: CookieProviderProps) => {
  return <CookiesProvider>{children}</CookiesProvider>
}
