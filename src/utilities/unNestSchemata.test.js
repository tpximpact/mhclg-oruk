import { unNestSchemata } from './unNestSchemata'

describe('unNestSchemata', () => {
	test('should handle nested object properties', () => {
		const input = {
			person: {
				properties: {
					address: {
						type: 'object',
						properties: {
							street: { type: 'string' },
							city: { type: 'string' }
						}
					}
				}
			}
		}

		const result = unNestSchemata(input)

		expect(result).toHaveProperty('address')
		expect(result.person.properties.address).toHaveProperty('$ref', 'address')
		expect(result.address).toEqual({
			type: 'object',
			properties: {
				street: { type: 'string' },
				city: { type: 'string' }
			}
		})
	})

	test('should handle array properties with object items', () => {
		const input = {
			person: {
				properties: {
					pets: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								name: { type: 'string' },
								species: { type: 'string' }
							}
						}
					}
				}
			}
		}

		const result = unNestSchemata(input)

		expect(result).toHaveProperty('pet')
		expect(result.person.properties.pets.items).toHaveProperty('$ref', 'pet')
		expect(result.pet).toEqual({
			type: 'object',
			properties: {
				name: { type: 'string' },
				species: { type: 'string' }
			}
		})
	})

	test('should not modify non-object and non-array properties', () => {
		const input = {
			person: {
				properties: {
					name: { type: 'string' },
					age: { type: 'number' }
				}
			}
		}

		const result = unNestSchemata(input)

		expect(result).toEqual(input)
	})

	test('should handle empty schema', () => {
		const input = {}
		const result = unNestSchemata(input)
		expect(result).toEqual({})
	})
})
