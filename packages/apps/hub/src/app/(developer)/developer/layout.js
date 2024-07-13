import Link from 'next/link'
			

export default function DeveloperLayout({ children }) {
	return (
		<>
			<nav style={{padding:"2rem"}}><Link href="/">[home]</Link></nav>
				{children}
		</>
	)
}
