import React, { ReactNode } from 'react'
import css from './PageMargin.module.css'

interface PageMarginProps {
	children: ReactNode
}

export const PageMargin = ({ children }: PageMarginProps) => <div className={css.pagemargin}>{children}</div>
