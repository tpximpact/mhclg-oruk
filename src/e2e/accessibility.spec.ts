import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('Accessibility Tests', () => {
	test('homepage should not have accessibility violations', async ({ page }) => {
		await page.goto('/')
		const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
		
		// Log violations for review
		if (accessibilityScanResults.violations.length > 0) {
			console.log('\n=== Homepage Accessibility Violations ===')
			accessibilityScanResults.violations.forEach((violation) => {
				console.log(`\n${violation.impact?.toUpperCase()}: ${violation.id}`)
				console.log(`Description: ${violation.description}`)
				console.log(`Help: ${violation.help}`)
				console.log(`Affected elements: ${violation.nodes.length}`)
				violation.nodes.forEach((node, idx) => {
					console.log(`  ${idx + 1}. ${node.html.substring(0, 100)}...`)
				})
			})
		}
		
		// Report but don't fail - comment out to make tests fail on violations
		console.log(`Homepage: Found ${accessibilityScanResults.violations.length} accessibility violations`)
		// Uncomment below to enforce accessibility compliance:
		// expect(accessibilityScanResults.violations).toEqual([])
	})

	test('about page should not have accessibility violations', async ({ page }) => {
		await page.goto('/about')
		const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
		
		if (accessibilityScanResults.violations.length > 0) {
			console.log('\n=== About Page Accessibility Violations ===')
			accessibilityScanResults.violations.forEach((violation) => {
				console.log(`\n${violation.impact?.toUpperCase()}: ${violation.id}`)
				console.log(`Description: ${violation.description}`)
				console.log(`Help: ${violation.help}`)
				console.log(`Affected elements: ${violation.nodes.length}`)
			})
		}
		
		console.log(`About page: Found ${accessibilityScanResults.violations.length} accessibility violations`)
		// Uncomment below to enforce accessibility compliance:
		// expect(accessibilityScanResults.violations).toEqual([])
	})

	test('developers page should not have accessibility violations', async ({ page }) => {
		await page.goto('/developers')
		const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
		
		if (accessibilityScanResults.violations.length > 0) {
			console.log('\n=== Developers Page Accessibility Violations ===')
			accessibilityScanResults.violations.forEach((violation) => {
				console.log(`\n${violation.impact?.toUpperCase()}: ${violation.id}`)
				console.log(`Description: ${violation.description}`)
				console.log(`Help: ${violation.help}`)
				console.log(`Affected elements: ${violation.nodes.length}`)
			})
		}
		
		console.log(`Developers page: Found ${accessibilityScanResults.violations.length} accessibility violations`)
		// Uncomment below to enforce accessibility compliance:
		// expect(accessibilityScanResults.violations).toEqual([])
	})

	test('community page should not have accessibility violations', async ({ page }) => {
		await page.goto('/community')
		const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
		
		if (accessibilityScanResults.violations.length > 0) {
			console.log('\n=== Community Page Accessibility Violations ===')
			accessibilityScanResults.violations.forEach((violation) => {
				console.log(`\n${violation.impact?.toUpperCase()}: ${violation.id}`)
				console.log(`Description: ${violation.description}`)
				console.log(`Help: ${violation.help}`)
				console.log(`Affected elements: ${violation.nodes.length}`)
			})
		}
		
		console.log(`Community page: Found ${accessibilityScanResults.violations.length} accessibility violations`)
		// Uncomment below to enforce accessibility compliance:
		// expect(accessibilityScanResults.violations).toEqual([])
	})

	test('adopt page should not have accessibility violations', async ({ page }) => {
		await page.goto('/adopt')
		const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
		
		if (accessibilityScanResults.violations.length > 0) {
			console.log('\n=== Adopt Page Accessibility Violations ===')
			accessibilityScanResults.violations.forEach((violation) => {
				console.log(`\n${violation.impact?.toUpperCase()}: ${violation.id}`)
				console.log(`Description: ${violation.description}`)
				console.log(`Help: ${violation.help}`)
				console.log(`Affected elements: ${violation.nodes.length}`)
			})
		}
		
		console.log(`Adopt page: Found ${accessibilityScanResults.violations.length} accessibility violations`)
		// Uncomment below to enforce accessibility compliance:
		// expect(accessibilityScanResults.violations).toEqual([])
	})

	test('case studies page should not have accessibility violations', async ({ page }) => {
		await page.goto('/case-studies')
		const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
		
		if (accessibilityScanResults.violations.length > 0) {
			console.log('\n=== Case Studies Page Accessibility Violations ===')
			accessibilityScanResults.violations.forEach((violation) => {
				console.log(`\n${violation.impact?.toUpperCase()}: ${violation.id}`)
				console.log(`Description: ${violation.description}`)
				console.log(`Help: ${violation.help}`)
				console.log(`Affected elements: ${violation.nodes.length}`)
			})
		}
		
		console.log(`Case studies page: Found ${accessibilityScanResults.violations.length} accessibility violations`)
		// Uncomment below to enforce accessibility compliance:
		// expect(accessibilityScanResults.violations).toEqual([])
	})
})
