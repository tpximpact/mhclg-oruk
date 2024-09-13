import styles from './InPageMenu.module.css'
import { PageMargin } from '@tpx/PageMargin'
import Link from 'next/link'

const MenuNode = ({ 
    data
}) => {
    return <li><Link href={data.urlPath}>{data.label}</Link></li>
}

export const InPageMenu = ({
    nodes
}) => {
    return (
        <PageMargin>
            
        <nav aria-label="Pages in this section" className={styles.ipm}>
            <ol className={styles.IPM}>
                {
                    nodes.map(
                        (node,i) => <MenuNode key={i} data={node} />
                    )
                }
            </ol>
        </nav>
        </PageMargin>
    )
}

