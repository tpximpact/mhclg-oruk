import styles from './TableFlex.module.css'

export const Table = ({ children, className, ...props }) => (
	<div role='table' className={`${styles.table} ${className}`} {...props}>
		{children}
	</div>
)
export const Thead = ({ children, className, ...props }) => (
	<div role='rowgroup' className={`${styles.thead} ${className}`} {...props}>
		{children}
	</div>
)
export const Tbody = ({ children, className, ...props }) => (
	<div role='rowgroup' className={`${styles.tbody} ${className}`} {...props}>
		{children}
	</div>
)
export const Tr = ({ children, className, ...props }) => (
	<div role='row' className={`${styles.tr} ${className}`} {...props}>
		{children}
	</div>
)
export const Th = ({ children, className, column, ...props }) => (
	<div
		role={column ? 'columnheader' : 'rowheader'}
		className={`${styles.th} ${className}`}
		{...props}
	>
		{children}
	</div>
)
export const Td = ({ children, className, ...props }) => (
	<div role='cell' className={`${styles.td} ${className}`} {...props}>
		{children}
	</div>
)
