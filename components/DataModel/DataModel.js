import styles from './DataModel.module.css'
import {DocumentationPage} from '@/components/Documentation'
import { Schema } from './Schema'
import {getAllSchemas} from './getAllSchemas'
	
export const DataModel = ({ 
	allVersionsContent,
	data
}) => {
	const keys =  Object.keys(data.schemata).sort()
	const allSchemas = getAllSchemas(data.schemata)
	const menuItems = allSchemas.map(item => ({
		title: item,
		target: item
	}))
	return (
	<DocumentationPage
		contentForAllVersions={allVersionsContent}
		contentForThisVersion={data.htmlContent}
		menuItems={menuItems}
		menuTitle="Classes"
	>
		<div className={styles.DataModel}>
			
				{keys.map(key => (
					<Schema 
						key={key} 
						parentKeyName={key}
						data={data.schemata[key]} 
						allSchemas={allSchemas} />
				))}
			</div>
	</DocumentationPage>)}