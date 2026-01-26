import styles from './main.module.css'
import { ReactNode } from 'react'

interface LandmarkMainProps {
  children: ReactNode
}

export const LandmarkMain = ({ children }: LandmarkMainProps) => (
  <main className={styles.main} role='main'>
    {children}
  </main>
)
