import { NamedMarkdownPage } from '../NamedMarkdownPage'
//import { Masthead } from '../Masthead'
//import { Main } from '@tpx/Main'

export const Homepage = ({ contentName, markdownRaw }) => (
	<NamedMarkdownPage name={contentName} markdownRaw={markdownRaw} />
)
