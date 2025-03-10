'use client'

import { useState, useEffect } from 'react'
import styles from './Header.module.css'
import { PageMargin } from '@/components/PageMargin'
import { Logo } from '@/components/Logo'
import { Menu } from '@/components/Menu'
import Link from 'next/link'

export const Header = ({ items, enableMenu = false }) => {
	const [showMenu, setShowMenu] = useState(false)

	return (
		<header>
			<Topbar enableMenu={enableMenu} showMenu={showMenu} setShowMenu={setShowMenu} />
			{showMenu ? (
				<Menu open={true} ariaName='mainmenu' items={items} setShowMenu={setShowMenu} />
			) : (
				<Menu ariaName='mainmenu' items={items} setShowMenu={setShowMenu} />
			)}
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
							<Logo animate={false} />
						</Link>
					</div>
					<div className={styles.centre}></div>
					<div className={styles.right}>
						{enableMenu ? <MenuOpener showMenu={showMenu} setShowMenu={setShowMenu} /> : null}
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
						<div>
							<span>Menu</span>
						</div>
					</button>
				) : (
					<button className={styles.closed} onClick={() => setShowMenu(true)}>
						<div>
							<span>Menu</span>
						</div>
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
