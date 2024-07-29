import { Markdown } from './Markdown'
import { parseMarkdown } from '../../util/markdown'

export default {
	title: 'Hub/Markdown',
	component: Markdown
}

const document = `---
title: Hello
author: Dave Author
---
# Hello world!


This is a paragraph

## Level Two heading A

This is a paragraph

## Level Two heading B

This is a paragraph

## Level Two heading C

This is a paragraph
`

const { content, frontmatter } = parseMarkdown(document)

export const NoMenu = () => <Markdown content={content} />

export const Menu = () => <Markdown content={content} showMenu={true} />

export const Frontmatter = () => (
	<Markdown showMenu={true} showFrontmatter={true} content={content} frontmatter={frontmatter} />
)
