import {JSONLiteral} from '@/components/JSONLiteral'

export const EntityRelationshipDiagram =  ({
	contentData, 
	version
}) => {
	const data = contentData[version]
	return (<div style={{padding:"2rem",background:"#000"}}> 
	<JSONLiteral 
	
	data={data} />
</div>)}
