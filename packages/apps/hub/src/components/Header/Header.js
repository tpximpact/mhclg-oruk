'use client'

import { useState } from /*, useEffect */ 'react'
import styles from './Header.module.css'
import { PageMargin } from '@tpx/PageMargin'
import { Logo } from '@/components/Logo'
import Link from 'next/link'
import { formatNodesForPageMenu } from '@/util/formatNodesForPageMenu'

export const Header = ({ items }) => {
	const [showMenu, setShowMenu] = useState(false)
	return (
		<header>
			<Topbar showMenu={showMenu} setShowMenu={setShowMenu} />
			{showMenu && <Menu items={items} setShowMenu={setShowMenu} />}
		</header>
	)
}

const Topbar = ({ showMenu, setShowMenu }) => {
	return (
		<div className={styles.Topbar}>
			<PageMargin>
				<div className={styles.content}>
					<div className={styles.left}>
						<Link href='/'>
							<Logo colour={'var(----colour-dark-green)'} />
						</Link>
					</div>
					<div className={styles.centre}></div>
					<div className={styles.right}>
						<MenuOpener showMenu={showMenu} setShowMenu={setShowMenu} />
					</div>
				</div>
			</PageMargin>
		</div>
	)
}

const Menu = ({ items, setShowMenu }) => {
	return (
		<nav className={styles.Menu}>
			{items.map((item, i) => (
				<MenuSection key={i} setShowMenu={setShowMenu} data={item} />
			))}
		</nav>
	)
}

const MenuSection = ({ data, setShowMenu }) => {
	return (
		<div className={styles.MenuSection}>
			<h5>{data.label}</h5>
			{data.dynamic && (
				<List
					setShowMenu={setShowMenu}
					data={data.dynamicChildNodes}
					overflow={data.dynamicOverflow}
				/>
			)}

			{data.childNodes && (
				<List setShowMenu={setShowMenu} data={formatNodesForPageMenu(data.childNodes)} />
			)}
		</div>
	)
}

const List = ({ data, overflow, setShowMenu }) => {
	return (
		<ol>
			{data &&
				data.map((item, key) => (
					<li className={styles.item} key={key}>
						{item.offsite ? (
							<a href={item.path}>{item.title} (opens in new window)</a>
						) : (
							<Link
								onClick={() => setShowMenu(false)}
								href={'/' + item.path}
								className={styles.thumbnail}
							>
								{item.title}
							</Link>
						)}
					</li>
				))}
			{overflow && <li>...plus {overflow} more </li>}
		</ol>
	)
}

const MenuOpener = ({ showMenu, setShowMenu }) => {
	return (
		<>
			{showMenu ? (
				<button className={styles.open} onClick={() => setShowMenu(false)}>
					<span>Menu</span>
				</button>
			) : (
				<button className={styles.closed} onClick={() => setShowMenu(true)}>
					<span>Menu</span>
				</button>
			)}
			{/*<Link href='/sitemap' className={styles.MenuOpener}>MENU</Link>*/}
		</>
	)
}
