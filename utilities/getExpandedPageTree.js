import {expandTree} from './expandTree'
import {getRawPageTree} from './getRawPageTree'

export const getExpandedPageTree = () => expandTree(getRawPageTree(), false)

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
