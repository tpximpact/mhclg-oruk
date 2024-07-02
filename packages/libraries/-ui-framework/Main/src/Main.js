import React from 'react'
import style from './Main.module.css'
import { PageMargin } from '@tpx/PageMargin'

export const Main = ({ children }) => (
	<main className={style.main}>
		<PageMargin>{children}</PageMargin>
	</main>
)
