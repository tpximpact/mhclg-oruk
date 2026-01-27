import styles from './TableFlex.module.css'
import { ReactNode, HTMLAttributes } from 'react'

interface TableProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export const Table = ({ children, className = '', ...props }: TableProps) => (
  <div role='table' className={`${styles.table} ${className}`} {...props}>
    {children}
  </div>
)

export const Thead = ({ children, className = '', ...props }: TableProps) => (
  <div role='rowgroup' className={`${styles.thead} ${className}`} {...props}>
    {children}
  </div>
)

export const Tbody = ({ children, className = '', ...props }: TableProps) => (
  <div role='rowgroup' className={`${styles.tbody} ${className}`} {...props}>
    {children}
  </div>
)

export const Tr = ({ children, className = '', ...props }: TableProps) => (
  <div role='row' className={`${styles.tr} ${className}`} {...props}>
    {children}
  </div>
)

interface ThProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
  column?: boolean
}

export const Th = ({ children, className = '', column, ...props }: ThProps) => (
  <div
    role={column ? 'columnheader' : 'rowheader'}
    className={`${styles.th} ${className}`}
    {...props}
  >
    {children}
  </div>
)

export const Td = ({ children, className = '', ...props }: TableProps) => (
  <div role='cell' className={`${styles.td} ${className}`} {...props}>
    {children}
  </div>
)
