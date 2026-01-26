// Status Display Component
import styles from './PassFailIndicator.module.css'

export default function PassFailIndicator({ value }: { value: string | number | boolean }) {
  const numValue = typeof value === 'string' ? parseInt(value, 10) : value
  const isPass = numValue === 1 || numValue === true

  return (
    <span className={`${styles.statusDisplay} ${isPass ? styles.statusPass : styles.statusFail}`}>
      <span className={styles.statusText}>{isPass ? 'pass' : 'fail'}</span>
      <span className={styles.statusIcon}>{isPass ? '✓' : '✗'}</span>
    </span>
  )
}
