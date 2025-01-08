import {
	DocumentationFeatureSection,
	DocumentationLineItem
} from '@/components/Documentation'
import { BadgeRequired, BadgeInPath } from '@/components/Badge'
import styles from './Parameters.module.css'

export const Parameters = ({
    data,
	parametersReferences
}) => {
   return( <DocumentationFeatureSection 
   				title="Parameters"
   			>
			{
				data.map(
				(p,i) => <Parameter 
				parametersReferences={parametersReferences}
				key={i} data={p}/>
			)
			}
    </DocumentationFeatureSection>)
}

const propertyInPath = data => data["in"] && data["in"] === "path"
const propertyRequired = data => data.required


const Badges = ({data}) => 
 (propertyInPath(data)  || propertyRequired(data)) && <span style={{
	display: "inline-block"
}} className={styles.Badges}>
{ propertyInPath(data) &&
	<BadgeInPath />
}
{propertyRequired(data) &&
	<BadgeRequired />
}
</span>

const Parameter = ({
	data,
	parametersReferences
}) => {
	if (data.$ref) {
		const name = data.$ref.replace("#/components/parameters/","")
		if (parametersReferences[name]) {
			data = parametersReferences[name]
		}
	}
	
	return (
	<DocumentationLineItem 
title={data.name}

> 
<Badges data={data}/> 
{data.description && <div className={styles.description}>
{data.description}
</div>}
{data.schema && <Schema data={data.schema} />}
</DocumentationLineItem>)
}

const Schema = ({data}) => <div className={styles.schema}>
<span className={styles.type}>{data.type}</span>
</div>