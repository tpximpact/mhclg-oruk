'use client'
import dynamic from 'next/dynamic';
const JSONLiteral = dynamic(() => import('../JSONLiteral'))



export const EntityRelationshipDiagram =  ({
	contentData, 
	version
}) => {
	const data = contentData[version]
	return (<div style={{padding:"2rem",background:"#000"}}> 
	<JSONLiteral 
	
	data={data} />
</div>)}
