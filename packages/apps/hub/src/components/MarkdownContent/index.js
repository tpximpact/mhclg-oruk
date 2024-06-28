'use server'
import { Children, cloneElement } from "react";
import { marked } from 'marked'
import parse from 'html-react-parser';
import Columns from '@tpx/Columns'
import styles from './Menu.module.css'

export const MarkdownContent = ({ raw, autoMenu }) => {
	const html = marked.parse(raw)
	if (autoMenu) {
		return <MarkdownContentWithMenu html={html}/>
	} 
	return <section dangerouslySetInnerHTML={{ __html: html }} />
}

const linkify = text => {
	const lower = text.toLowerCase()
	const arr = lower.split(" ")
	return arr.join('_');
}


const MarkdownContentWithMenu = ({ html}) => {
	const nodes = parse(html)
	const menu = []
	const arrayChildren = Children.toArray(nodes);
	const modifiedNodes = Children.map(arrayChildren, (child, index) => {
		if (child.type === "h2") {
			const text = child.props.children
			menu.push(text)
			return cloneElement(child, {
				id:linkify(text)
			  })
		}
		return child
	})


	return <section>
		<Columns layout="24">
			<div>
				<ol className={styles.menu}>
					{menu.map(
						(item,i) => <li key={i}><a href={"#" + linkify(item)}>{item}</a></li>
					)}
				</ol>
			</div>
			<div>{modifiedNodes }</div>
		</Columns>

	</section>
}

/*
const MarkdownContentWithMenu = ({ raw }) => {
	const html = marked.parse(raw)
	const nodes = parse(html)
	const menu = 
	nodes.forEach(node => {
		if (node.type === "h2") {
			 console.log(node.props.children)
		}
	})

	return <main>{nodes}</main>
}*/