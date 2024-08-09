'use server'

import { Children, cloneElement } from 'react'
import { marked } from 'marked'
import parse from 'html-react-parser'
import Columns from '@tpx/Columns'
import styles from './Menu.module.css'

export const Markdown = ({ frontmatter, content, showFrontmatter = false, showMenu = false }) => (
	<>
		<Content data={content} showMenu={showMenu} />
		{showFrontmatter && <FrontMatter data={frontmatter} />}
	</>
)

const Content = ({ data, showMenu }) => {
	const html = marked.parse(data)
	return <section>{showMenu ? <WithMenu html={html} /> : <RenderHTML html={html} />} </section>
}

const FrontMatter = ({ data }) => <div>{JSON.stringify(data)}</div>

const RenderHTML = ({ html }) => <div
dangerouslySetInnerHTML={{ __html: html }} />

const WithMenu = ({ html }) => {
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
		return <RenderHTML html={html} />
	}

	return (
		<Columns layout='24'>
			<div>
				<h4 style={{ fontWeight: 300 }}>On this page</h4>
				<ol className={styles.menu}>
					{menu.map((item, i) => (
						<li key={i}>
							<a href={'#' + linkify(item)}>{item}</a>
						</li>
					))}
				</ol>
			</div>
			<div className={styles.bodycopy}>{modifiedNodes}</div>
		</Columns>
	)
}

const linkify = text => {
	const lower = text.toLowerCase()
	const arr = lower.split(' ')
	return arr.join('_')
}
