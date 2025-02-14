'use client';

import { Toaster } from 'react-hot-toast';

export const ToastProvider = ({
  children,
}) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  )
}
