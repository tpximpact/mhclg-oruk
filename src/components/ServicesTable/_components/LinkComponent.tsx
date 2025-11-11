import Link from 'next/link'
import styles from './LinkComponent.module.css'

interface LinkComponentProps {
  url: string
  children: React.ReactNode
}

export default function LinkComponent({ url, children }: LinkComponentProps) {
  if (!url) return null

  const isExternal = url.startsWith('http')

  return isExternal ? (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className={`${styles.link} ${styles.externalLink}`}
    >
      {children}
    </a>
  ) : (
    <Link href={url} className={styles.link}>
      {children}
    </Link>
  )
}
