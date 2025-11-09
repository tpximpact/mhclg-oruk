import Link from 'next/link'
import type { ServiceData } from './types'
import styles from './ServicesTable.module.css'

interface ServiceCardProps {
  service: ServiceData
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const renderField = (label: string, data: ServiceData[keyof ServiceData]) => {
    if (!data || !data.value || data.value === 'N/A') return null

    const displayValue = String(data.value)
    const { url } = data as { value: string; url?: string }

    return (
      <div className={styles.cardField}>
        <dt className={styles.cardLabel}>{label}:</dt>
        <dd className={styles.cardValue}>
          {url ? (
            url.startsWith('http') ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.link} ${styles.externalLink}`}
              >
                {displayValue}
              </a>
            ) : (
              <Link href={url} className={styles.link}>
                {displayValue}
              </Link>
            )
          ) : (
            <span>{displayValue}</span>
          )}
        </dd>
      </div>
    )
  }

  return (
    <div className={styles.serviceCard}>
      <dl className={styles.cardContent}>
        {renderField('Name', service.name)}
        {renderField('Publisher', service.publisher)}
        {renderField('Developer', service.developer)}
        {renderField('Last Tested', service.testDate)}
        {service.comment && service.comment.value && service.comment.value !== 'N/A' && (
          <div className={styles.cardField}>
            <dt className={styles.cardLabel}>Description:</dt>
            <dd className={`${styles.cardValue} ${styles.cardDescription}`}>
              {service.comment.value}
            </dd>
          </div>
        )}
      </dl>
    </div>
  )
}

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