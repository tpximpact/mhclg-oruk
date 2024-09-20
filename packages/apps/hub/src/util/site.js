// TODO THIS SHOULD REPLACE ALL SIMILAR OLDER CODE

import pageTree from '../../content/sitemap.json'

const expand = (structure,parentNode) => {
	let structureCopy = structuredClone(structure)
	let expanded = []
	structureCopy.forEach(
		item => {
			if (parentNode) {
				item.parentNodeName = parentNode.name
				if (!item.offsite) {
					item.urlPath = parentNode.urlPath + "/" + item.urlPath
				}
			}
			if (item.childNodes) {
				// recursiveky process children
				let children = expand(item.childNodes, item)
				expanded = expanded.concat(children)
			}
			delete item.childNodes
			expanded.push(item)
		}
	)
	return expanded
}  
 

export const getPageWithName = name => ALL_PAGES.find(
		page => page.name === name
	)
	
	export const getPageWithPath = path => ALL_PAGES.find(
		page => page.urlPath === path
	)


const ALL_PAGES = expand(pageTree,false)

/*

ALL_PAGES can be rendered with

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

