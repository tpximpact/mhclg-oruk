import { ReactNode } from 'react'
import styles from './Banner.module.css'

interface BannerProps {
  label?: ReactNode
  children?: ReactNode
}

export const Banner = ({ label, children }: BannerProps) => (
  <div className={styles.Banner}>
    {label}
    {children}
  </div>
)
