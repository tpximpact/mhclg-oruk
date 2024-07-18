describe('Navigation', () => {
	it('should navigate to the dashboard', () => {
		cy.visit('http://localhost:3000/')
		cy.get('a[href*="dashboard"]').click()
		cy.url().should('include', '/developer/tools/dashboard')
		cy.get('h1').contains('Dashboard')
	})

	it('should navigate to the validator', () => {
		cy.visit('http://localhost:3000/')
		cy.get('a[href*="validator"]').click()
		cy.url().should('include', '/developer/tools/validator')
		cy.get('h1').contains('Validator')
	})
})

describe('Home', () => {
	it('should be accessible', () => {
		cy.visit('http://localhost:3000/')
		cy.injectAxe()
		cy.checkA11y()
	})
})
