const DASHBOARD = 'http://localhost:3000/developer/tools/dashboard'

describe('Dashboard', () => {
	it('should render', () => {
		cy.visit(DASHBOARD)
		cy.get('h1').contains('dashboard')
	})

	it('should be accessible', () => {
		cy.visit(DASHBOARD)
		cy.injectAxe()
		cy.checkA11y()
	})
})
