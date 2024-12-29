export const EntityRelationshipDiagram =  ({
	contentData, 
	version
}) => <div> {version}
{JSON.stringify(contentData[version])}
</div>
