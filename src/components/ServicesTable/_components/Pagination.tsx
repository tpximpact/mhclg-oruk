'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import styles from './Pagination.module.css'

interface PaginationProps {
  currentPage: number
  totalPages: number
  totalItems: number
  itemsPerPage: number
  startIndex: number
  endIndex: number
  basePath: string
}

export function Pagination({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage: _itemsPerPage,
  startIndex,
  endIndex,
  basePath
}: PaginationProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  if (totalPages <= 1) return null

  const navigateToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    if (page > 1) {
      params.set('page', page.toString())
    } else {
      params.delete('page')
    }
    const queryString = params.toString()
    const url = `${basePath}${queryString ? `?${queryString}` : ''}`
    router.push(url, { scroll: false })
  }

  const getVisiblePages = () => {
    const delta = 2
    const range = []
    const rangeWithDots = []

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i)
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...')
    } else {
      rangeWithDots.push(1)
    }

    rangeWithDots.push(...range)

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages)
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages)
    }

    return rangeWithDots
  }

  return (
    <div className={styles.pagination}>
      <div className={styles.paginationSm}>
        {currentPage > 1 ? (
          <button
            onClick={() => navigateToPage(currentPage - 1)}
            className={styles.paginationButton}
          >
            Previous
          </button>
        ) : (
          <span className={`${styles.paginationButton} ${styles.paginationButtonDisabled}`}>
            Previous
          </span>
        )}

        {currentPage < totalPages ? (
          <button
            onClick={() => navigateToPage(currentPage + 1)}
            className={styles.paginationButton}
          >
            Next
          </button>
        ) : (
          <span className={`${styles.paginationButton} ${styles.paginationButtonDisabled}`}>
            Next
          </span>
        )}
      </div>

      <div className={styles.paginationLg}>
        <div>
          <p className={styles.paginationInfo}>
            Showing <span>{startIndex}</span> to <span>{endIndex}</span> of{' '}
            <span>{totalItems}</span> results
          </p>
        </div>

        <div>
          <nav className={styles.paginationNav} aria-label='Pagination'>
            {/* Previous button */}
            {currentPage > 1 ? (
              <button
                onClick={() => navigateToPage(currentPage - 1)}
                className={styles.paginationNavButton}
                aria-label='Previous page'
              >
                <span className={styles.srOnly}>Previous</span>
                <svg
                  style={{ height: '1.25rem', width: '1.25rem' }}
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            ) : (
              <span
                className={`${styles.paginationNavButton} ${styles.paginationNavButtonDisabled}`}
              >
                <span className={styles.srOnly}>Previous</span>
                <svg
                  style={{ height: '1.25rem', width: '1.25rem' }}
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>
            )}

            {/* Page numbers */}
            {getVisiblePages().map((page, index) => {
              if (page === '...') {
                return (
                  <span key={`ellipsis-${index}`} className={styles.ellipsis}>
                    ...
                  </span>
                )
              }

              const pageNumber = page as number
              const isCurrent = pageNumber === currentPage

              return isCurrent ? (
                <span key={pageNumber} className={styles.pageNumberCurrent} aria-current='page'>
                  {pageNumber}
                </span>
              ) : (
                <button
                  key={pageNumber}
                  onClick={() => navigateToPage(pageNumber)}
                  className={styles.pageNumber}
                  aria-label={`Go to page ${pageNumber}`}
                >
                  {pageNumber}
                </button>
              )
            })}

            {/* Next button */}
            {currentPage < totalPages ? (
              <button
                onClick={() => navigateToPage(currentPage + 1)}
                className={styles.paginationNavButton}
                aria-label='Next page'
              >
                <span className={styles.srOnly}>Next</span>
                <svg
                  style={{ height: '1.25rem', width: '1.25rem' }}
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            ) : (
              <span
                className={`${styles.paginationNavButton} ${styles.paginationNavButtonDisabled}`}
              >
                <span className={styles.srOnly}>Next</span>
                <svg
                  style={{ height: '1.25rem', width: '1.25rem' }}
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>
            )}
          </nav>
        </div>
      </div>
    </div>
  )
}
