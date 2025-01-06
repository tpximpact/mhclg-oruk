import {pluralToSingular } from './pluralToSingular'

export const unNestSchemata = schemata => {
	Object.keys(schemata).forEach(schemaKey => {
		const schema = schemata[schemaKey]
		Object.keys(schema.properties).forEach(propertyKey => {
			const property = schema.properties[propertyKey]
			if (property.type === "object") {
				// console.log("nested obj: " + schemaKey + "." + propertyKey)
				if (!schemata[propertyKey]) {
					schemata[propertyKey] = Object.assign({},property)
				}
				property.$ref = propertyKey 
			}
			if (property.type === "array") {
				
				const singularPropertyName = pluralToSingular(propertyKey) 
				// console.log("nested array: " + schemaKey + "." + singularPropertyName )
				
				if( (property.items) && property.items.type === "object") {
	
					schemata[singularPropertyName] = Object.assign({},property.items)
				
					property["items"].$ref = singularPropertyName
					
				}
			
			}
		})
	})
	return schemata
}