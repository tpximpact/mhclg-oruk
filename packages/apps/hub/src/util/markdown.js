/*

to use this version install

"remark": "^15.0.1",
		"remark-frontmatter": "^5.0.0",
		"remark-html": "^16.0.1",
		"remark-parse": "^11.0.0",
		"remark-parse-frontmatter": "^1.0.3",

import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'
import remarkFrontmatter from 'remark-frontmatter'
import remarkParseFrontmatter from 'remark-parse-frontmatter'
import { remark } from 'remark'
*/

import * as matter from 'gray-matter'
import { marked } from 'marked'

import {stripString} from '@igor.dvlpr/strip-yaml-front-matter'

export const extractMetadata = parsed => {
	return parsed.frontmatter
}

export const extractHTML = parsed => {
	return parsed.content
}

export const parseMarkdown = raw => {
	/*
	const processed = remark()
		.use(remarkParse)
		.use(remarkHtml)
		.use(remarkFrontmatter, ['yaml', 'toml'])
		.use(remarkParseFrontmatter)
		.processSync(raw)

	return {
		content: processed.value,
		frontmatter: processed.data.frontmatter
	}
	*/

	return {
		content: marked(stripString(raw)),
		frontmatter: matter(raw).data
	
	}
}

