import styles from './LoadingOverlay.module.css'

interface LoadingOverlayProps {
  url: string
}

export default function LoadingOverlay({ url }: LoadingOverlayProps) {
  return (
    <div className={styles.overlay}>
      <div className={styles.card}>
        <div className={styles.content}>
          <svg
            className={styles.spinner}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              className={styles.spinnerCircle}
              cx='12'
              cy='12'
              r='10'
              stroke='#2563eb'
              strokeWidth='4'
            />
            <path
              className={styles.spinnerPath}
              fill='#2563eb'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            />
          </svg>
          <div>
            <p className={styles.title}>Validating your feed</p>
            <p className={styles.url}>{url}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
