'use client'

import { useState, useEffect } from 'react'
import styles from './Header.module.css'
import { PageMargin } from '@tpx/PageMargin'
import { Logo } from '@/components/Logo'
import { Menu } from '@/components/Menu'
import Link from 'next/link'

export const Header = ({ items,
	enableMenu=false}) => {
	const [showMenu, setShowMenu] = useState(false)

	return (
		<header>
			<Topbar enableMenu={enableMenu}
			showMenu={showMenu} setShowMenu={setShowMenu} />
			{showMenu ? <Menu ariaName='mainmenu' items={items} setShowMenu={setShowMenu} /> : null }
		</header>
	)
}

const Topbar = ({ enableMenu, showMenu, setShowMenu }) => {
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
						{
							enableMenu ? <MenuOpener showMenu={showMenu} setShowMenu={setShowMenu} /> : null
						}
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
	}, [])
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
		)
	} else {
		return (
			<Link className={styles.noJsLink} href='/sitemap'>
				MENU
			</Link>
		)
	}
}