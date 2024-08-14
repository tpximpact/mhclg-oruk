const VALIDATOR_FORM = 'http://localhost:3000/developer/tools/validator'

describe('Validator Form', () => {
	it('should render validator form', () => {
		cy.visit(VALIDATOR_FORM)
		cy.get('h1').contains('Validate')
	})

	it('should be accessible', () => {
		cy.visit(VALIDATOR_FORM)
		cy.injectAxe()
		cy.checkA11y()
	})
})
