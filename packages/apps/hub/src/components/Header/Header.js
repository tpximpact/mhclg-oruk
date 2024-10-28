'use client'

import { useState, useEffect } from  'react'
import styles from './Header.module.css'
import { PageMargin } from '@tpx/PageMargin'
import { Logo } from '@/components/Logo'
import { Menu } from '@/components/Menu'
import Link from 'next/link'

export const Header = ({ items }) => {
	const [showMenu, setShowMenu] = useState(false)
	
	return (
		<header>
			<Topbar showMenu={showMenu} setShowMenu={setShowMenu} />
			{showMenu && <Menu  ariaName="mainmenu" items={items} setShowMenu={setShowMenu} />}
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



const MenuOpener = ({ showMenu, setShowMenu }) => {
	const [initialised, setInitialised] = useState(false)
	useEffect(() => {
		setInitialised(true)
	  }, []); 
	if (initialised) {

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
		</>
	) } else {
		return  <Link className={styles.noJsLink} href='/sitemap' >MENU</Link>
	}
}
