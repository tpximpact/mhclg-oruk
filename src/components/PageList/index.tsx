import styles from './PageList.module.css'
import { PageThumbnail } from '@/components/PageThumbnail'

interface PageListItem {
  title: string
  path: string
  date?: string
  slug?: string
}

interface PageListProps {
  data: PageListItem[]
  suppressDetails?: boolean
}

/*
expects data in the format

[
    {
        "title":"News Story One",
        "path":"updates/0001",
        "date":"11/10/2024",
        "slug":"This story has a brief description / preview of its contents."
    },
    {
        "title":"News Story Two",
        "path":"updates/0002",
        "date":"01/01/1984"
    },
    ...etc...   
]
*/

export const PageList = ({ data, suppressDetails }: PageListProps) => (
  <ol className={styles.list}>
    {data.map((item, key) => (
      <li className={styles.item} key={key}>
        <PageThumbnail suppressDetails={suppressDetails} {...item} />
      </li>
    ))}
  </ol>
)
