'use server'
import { Children, cloneElement } from 'react'

import parse from 'html-react-parser'
import Columns from '@/components/Columns'
import styles from './Menu.module.css'
import Link from 'next/link'
//import { MarkdownError } from './MarkdownError'

export const MarkdownContent = async ({ html, autoMenu, afterLinks }) => {
	const ContentComponent = autoMenu ? MarkdownContentWithMenu : MarkdownContentNoMenu
	return <ContentComponent html={html} afterLinks={afterLinks} />
}

const linkify = text => {
	const lower = text.toLowerCase()
	const arr = lower.split(' ')
	return arr.join('_')
}

const MarkdownContentNoMenu = ({ html, afterLinks }) => (
	<>
		<section
			className={`${styles.content} ${styles.solo}`}
			dangerouslySetInnerHTML={{ __html: html }}
		/>
		{afterLinks && <Afterlinks data={afterLinks} />}
	</>
)

const MarkdownContentWithMenu = ({ html, afterLinks }) => {
	const nodes = parse(html)
	const menu = []
	const arrayChildren = Children.toArray(nodes)
	const modifiedNodes = Children.map(arrayChildren, child => {
		if (child.type === 'h2') {
			const text = child.props.children
			menu.push(text)
			return cloneElement(child, {
				id: linkify(text)
			})
		}
		return child
	})

	if (menu.length < 1) {
		return <MarkdownContentNoMenu html={html} afterLinks={afterLinks} />
	}

	return (
		<section>
			<Columns layout='42'>
				<div className={styles.content}>
					{modifiedNodes}
					{afterLinks && <Afterlinks data={afterLinks} />}
				</div>
				<div>
					<h2 className={styles.onthispage} style={{ fontWeight: 300 }}>
						On this page
					</h2>
					<ol className={styles.menu}>
						{menu.map((item, i) => (
							<li key={i}>
								<a href={'#' + linkify(item)}>{item}</a>
							</li>
						))}
					</ol>
				</div>
			</Columns>
		</section>
	)
}

const Afterlinks = ({ data }) => (
	<>
		<hr />
		<ul>
			{data.map(item => (
				<li key={item.url}>
					<Link href={item.url}>{item.name}</Link>
				</li>
			))}
		</ul>
	</>
)
