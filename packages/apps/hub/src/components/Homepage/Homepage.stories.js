import { Homepage } from './Homepage'

export default {
	title: 'Hub/Homepage',
	component: Homepage
}

const md =  `# Hello World

This is a paragraph

## Level Two heading A

This is a paragraph

## Level Two heading B

This is a paragraph

## Level Two heading C

This is a paragraph
 `


export const Menu = () => <Homepage markdownRaw={md}/>

export const NoMenu = () => <Homepage markdownRaw={md} automenu={false}/>
