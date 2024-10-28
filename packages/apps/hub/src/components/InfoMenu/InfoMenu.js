import styles from './InfoMenu.module.css'
import structure from '../../../content/sitemap.json'
import Link from 'next/link'

const getInfoItems = () => {
    const section = structure.filter(
        item => item.name === "info"
    )[0]
    return section["childNodes"]
}

export const InfoMenu = () => {
    const items = getInfoItems()
    
    return(<ol className={styles.InfoMenu}>
   {
items.map(
    (item) => <li key={item.name}><Link href={"/info/"+item.contentPath}>{item.label}</Link></li>
)

}
    </ol>)
}