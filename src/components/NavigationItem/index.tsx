import Link from 'next/link'

import styles from './NavigationItem.module.css'

interface NavigationItemProps {
  label: string
  urlPath?: string
  todo?: boolean
  hide?: boolean
  selected?: boolean
  offsite?: boolean
}

export const NavigationItem = ({
  todo,
  hide,
  selected,
  offsite,
  ...props
}: NavigationItemProps) => {
  if (hide) return null

  if (offsite) {
    return <OffsiteItem {...props} />
  }
  if (selected) return <SelectedItem {...props} />
  if (todo) {
    return <Todo {...props} />
  }
  return <Item {...props} />
}

interface ItemProps {
  label: string
  urlPath?: string
}

export const SelectedItem = ({ label, urlPath }: ItemProps) => (
  <li className={`${styles.item} ${styles.selected}`}>
    <a href={urlPath}>
      <span className={styles.inner}>{label}</span>
    </a>
  </li>
)

export const Item = ({ label, urlPath }: ItemProps) => (
  <li className={styles.item}>
    {urlPath && (
      <Link href={urlPath}>
        <span className={styles.inner}>{label}</span>
      </Link>
    )}
  </li>
)

export const Todo = ({ label, urlPath }: ItemProps) => (
  <li className={`${styles.item} ${styles.todo}`}>
    {urlPath && (
      <Link href={urlPath}>
        <span className={styles.inner}>{label}</span>
      </Link>
    )}
  </li>
)

export const OffsiteItem = ({ label, urlPath }: ItemProps) => (
  <li className={`${styles.item} ${styles.offsite}`}>
    <a href={urlPath} target='_new'>
      <span className={styles.inner}>
        {label} <small>(new window)</small>
      </span>
    </a>
  </li>
)
