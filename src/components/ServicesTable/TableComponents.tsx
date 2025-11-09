import Link from 'next/link'
import type { ServiceData } from './types'
import styles from './ServicesTable.module.css'

interface TableCellProps {
  data: ServiceData[keyof ServiceData]
  className?: string
  columnKey?: keyof ServiceData
}

export function TableCell({ data, className, columnKey }: TableCellProps) {
  if (!data) {
    return <td className={className}>-</td>
  }

  const { value, url }: { value: string; url?: string } = data
  
  // Ensure value is a string and handle potential objects
  const displayValue = value && value !== '[object Object]' ? String(value) : '-'
  
  // Apply different styling for description column
  const isDescription = columnKey === 'comment'
  const contentClass = isDescription 
    ? `${styles.cellContent} ${styles.descriptionContent}`
    : styles.cellContent

  const content = (
    <span className={contentClass} title={isDescription ? undefined : displayValue}>
      {displayValue}
    </span>
  )

  if (url) {
    const isExternal = url.startsWith('http')
    
    if (isExternal) {
      return (
        <td className={className}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.link} ${styles.externalLink}`}
          >
            {content}
          </a>
        </td>
      )
    } else {
      return (
        <td className={className}>
          <Link href={url} className={styles.link}>
            {content}
          </Link>
        </td>
      )
    }
  }

  return <td className={className}>{content}</td>
}

interface TableHeaderProps {
  label: string
  sortable: boolean
  currentSort?: 'asc' | 'desc' | null
  onSort?: () => void
  className?: string
}

export function TableHeader({ label, sortable, currentSort, onSort, className }: TableHeaderProps) {
  return (
    <th className={`${styles.th} ${className || ''}`}>
      {sortable ? (
        <button
          onClick={onSort}
          className={styles.sortButton}
        >
          {label}
          <span className={styles.sortIcon}>
            {currentSort === 'asc' && '↑'}
            {currentSort === 'desc' && '↓'}
            {!currentSort && '↕'}
          </span>
        </button>
      ) : (
        label
      )}
    </th>
  )
}