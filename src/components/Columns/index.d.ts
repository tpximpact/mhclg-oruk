import { ReactNode } from 'react'

interface ColumnsProps {
  className?: string
  children: ReactNode
  layout?: string | number
  debug?: boolean
  supressTrailingSpace?: boolean
  [key: string]: any
}

declare const Columns: React.FC<ColumnsProps>

export default Columns
