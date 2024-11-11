const UPDATE = 'http://localhost:3000/updates/0001'

  

describe('Update', () => {
	it('should render', () => {
		cy.visit(UPDATE)
		cy.get('h1').contains('News')
	})

	it('should be accessible', () => {
		cy.visit(UPDATE)
		cy.injectAxe()
		cy.checkA11y()
	})
})

const ADOPT = 'http://localhost:3000/adopt/part_01'

describe('Adopt', () => {
	it('should render', () => {
		cy.visit(ADOPT)
		cy.get('h1').contains('Part One')
	})

	it('should be accessible', () => {
		cy.visit(ADOPT)
		cy.injectAxe()
		cy.checkA11y()
	})
})

const COMMUNITY = 'http://localhost:3000/community'

describe('Adopt', () => {
	it('should render', () => {
		cy.visit(COMMUNITY)
		cy.get('h1').contains('Community')
	})

	it('should be accessible', () => {
		cy.visit( COMMUNITY)
		cy.injectAxe()
		cy.checkA11y()
	})
})

const DIRECTORY  = 'http://localhost:3000/community/directory'

describe('Directory', () => {
	it('should render', () => {
		cy.visit(DIRECTORY )
		cy.get('h1').contains('Directory')
	})

	it('should be accessible', () => {
		cy.visit( DIRECTORY )
		cy.injectAxe()
		cy.checkA11y()
	})
})

const JOIN = "http://localhost:3000/community/join"

describe('Join', () => {
	it('should render', () => {
		cy.visit( JOIN )
		cy.get('h1').contains('informed')
	})

	it('should be accessible', () => {
		cy.visit(  JOIN )
		cy.injectAxe()
		cy.checkA11y()
	})
})

const API= "http://localhost:3000/developers/api"

describe('api', () => {
	it('should render', () => {
		cy.visit( API)
		cy.get('h1').contains('API')
	})

	it('should be accessible', () => {
		cy.visit(  API )
		cy.injectAxe()
		cy.checkA11y()
	})
})

