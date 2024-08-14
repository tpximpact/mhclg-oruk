// inspired by https://nikolasbarwicki.com/articles/highlight-currently-active-link-in-nextjs-13-with-app-router/
/* eslint no-unused-vars: 0 */

import { usePathname } from 'next/navigation'

export const useActivePath = (path) => {
    const pathname = usePathname()
  
    const checkActivePath = (path) => {
      if (path === '/' && pathname !== path) {
        return false
      }
      return pathname.startsWith(path)
    }
  
    return checkActivePath
  }