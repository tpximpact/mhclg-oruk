import styles from './Button.module.css'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
}

export const Button = ({ children, ...props }: ButtonProps) => (
	<button className={styles.button} {...props}>
		<span>{children}</span>
	</button>
)
