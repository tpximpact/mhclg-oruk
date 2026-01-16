import React, { ReactNode } from 'react'
import style from './Main.module.css'

interface MainProps {
  children: ReactNode
}

export const Main = ({ children }: MainProps) => <main className={style.main}>{children}</main>
