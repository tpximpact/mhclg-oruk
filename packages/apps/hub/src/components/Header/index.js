import styles from './Header.module.css'
import {Logo} from '@/components/Logo'
import Link from 'next/link'

const SELECTED = "/about"

const navItems = [
    {
        target: "/",
        text: 'Home'
    },
    {
        target: "/about",
        text: 'About Open Referral UK'
    },
    {
        target: "/how",
        text: 'How it works'
    },
    {
        target: "/community",
        text: 'Community'
    },
    {
        target: "/developers",
        text: 'For developers'
    },
    {
        target: "/how",
        text: 'How it works'
    },
    {
target: "https://forum.openreferral.org",
text: "forum",
offsite: true
    },
    {
        target: "/contact",
        text: 'Contact us'
    },
]

export const Header = () => <header className={styles.header}>
    <Logo />
    <nav>
<ol>
{navItems.map (
item => <NavItem selectedTarget={SELECTED} {...item} />
)}
    </ol>
        </nav>
</header>

const NavItem = ({
selectedTarget,
target,
text,
offsite
}) => {
    if (offsite) return  <li className={styles.offsite}><a href={target} target="_new">{text}</a></li>
    
    if  (selectedTarget === target) return <li className={styles.selected}>{text}</li>

return <li><Link href={target}>{text}</Link></li>
}

