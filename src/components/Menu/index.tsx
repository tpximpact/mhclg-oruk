import Link from 'next/link'
import styles from './Menu.module.css'
import { PageMargin } from '../PageMargin'
import { Dispatch, SetStateAction } from 'react'

interface DynamicItem {
  title: string
  path: string
  offsite?: boolean
  slug?: string
}

interface ChildNode {
  label: string
  urlPath?: string
  offsite?: boolean
  teaser?: string
  dynamic?: boolean
}

interface MenuItem {
  label: string
  urlPath?: string
  childNodes?: ChildNode[]
  dynamicChildNodes?: DynamicItem[]
  dynamicOverflow?: string
}

interface MenuProps {
  ariaName: string
  items?: MenuItem[]
  setShowMenu?: Dispatch<SetStateAction<boolean>>
  open?: boolean
}

export const Menu = ({ ariaName, items, setShowMenu, open }: MenuProps) => {
  if (!items) {
    return null
  }
  return (
    <div aria-label={ariaName} className={`${styles.Menu} ${open ? styles.open : ''}`}>
      <PageMargin>
        <div className={styles.Innermenu}>
          {items.map((item, i) => (
            <MenuSection key={i} setShowMenu={setShowMenu} data={item} />
          ))}
        </div>
      </PageMargin>
    </div>
  )
}

interface MenuSectionProps {
  data: MenuItem
  setShowMenu?: Dispatch<SetStateAction<boolean>>
}

const MenuSection = ({ data, setShowMenu }: MenuSectionProps) => {
  // Flatten menuItems so that dynamic child nodes and single nodes are merged into one array
  const menuItems = data.childNodes
    ? data.childNodes.flatMap(node =>
        node.dynamic
          ? data.dynamicChildNodes || []
          : [
              {
                title: node.label,
                path: node.urlPath || '',
                offsite: node.offsite,
                slug: node.teaser
              }
            ]
      )
    : data.dynamicChildNodes || []

  return (
    <div className={styles.MenuSection}>
      <div className={styles.heading}>{data.label}</div>

      <List setShowMenu={setShowMenu} data={menuItems} overflow={data.dynamicOverflow} />
    </div>
  )
}

const getSectionRoot = (data: DynamicItem[]): string | false => {
  if (data && Array.isArray(data) && data.length > 0 && data[0]) {
    const components = data[0].path.split('/')
    return '/' + components[0]
  }
  return false
}

interface ListProps {
  data: DynamicItem[]
  overflow?: string
  setShowMenu?: Dispatch<SetStateAction<boolean>>
}

const List = ({ data, overflow, setShowMenu }: ListProps) => {
  const sectionRoot = overflow ? getSectionRoot(data) : false
  return (
    <ol>
      {data &&
        data.map((item, key) => (
          <li className={styles.item} key={key}>
            {item.offsite ? (
              <a href={item.path}>{item.title} (opens in new window)</a>
            ) : (
              <Link
                onClick={setShowMenu ? () => setShowMenu(false) : undefined}
                href={'/' + item.path}
                className={styles.thumbnail}
              >
                {item.title ? item.title : 'e'}
              </Link>
            )}
          </li>
        ))}
      {overflow && (
        <li className={styles.overflow}>
          ...plus <Link href={sectionRoot as string}>{overflow} more (show all)</Link>
        </li>
      )}
    </ol>
  )
}
