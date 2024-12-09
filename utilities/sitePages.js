import {expandTree} from './expandTree'
import pageTree from '../content/sitemap.json'

export const sitePages = () => expandTree(pageTree, false)

/*

result can be rendered with

{
				pages.map(
			 p => <div style={{marginBottom:"1rem"}}>
			 {
				 Object.keys(p).map(
				    k => <div>{k}:{JSON.stringify(p[k])}</div>
				 )
				}
			 </div>
				)
			}

*/
