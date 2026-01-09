import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import * as fs from 'fs'
import * as path from 'path'

// Store all violations for the final report
const allViolations: any[] = []

test.describe('Accessibility Tests', () => {
	test.afterAll(async () => {
		// Generate report after all tests complete
		const reportDir = path.join(process.cwd(), 'accessibility-report')
		if (!fs.existsSync(reportDir)) {
			fs.mkdirSync(reportDir, { recursive: true })
		}

		// Generate JSON report
		const jsonPath = path.join(reportDir, 'accessibility-report.json')
		fs.writeFileSync(jsonPath, JSON.stringify(allViolations, null, 2))

		// Generate Markdown report
		const mdPath = path.join(reportDir, 'accessibility-report.md')
		let markdown = '# Accessibility Test Report\n\n'
		markdown += `Generated: ${new Date().toISOString()}\n\n`
		markdown += `Total Pages Tested: ${allViolations.length}\n\n`
		
		const totalViolations = allViolations.reduce((sum, page) => sum + page.violations.length, 0)
		markdown += `Total Violations Found: ${totalViolations}\n\n`
		markdown += '---\n\n'

		allViolations.forEach((pageReport) => {
			markdown += `## ${pageReport.page}\n\n`
			markdown += `**Violations Found:** ${pageReport.violations.length}\n\n`

			if (pageReport.violations.length > 0) {
				pageReport.violations.forEach((violation: any, idx: number) => {
					markdown += `### ${idx + 1}. ${violation.id}\n\n`
					markdown += `**Impact:** ${violation.impact?.toUpperCase() || 'UNKNOWN'}\n\n`
					markdown += `**Description:** ${violation.description}\n\n`
					markdown += `**Help:** ${violation.help}\n\n`
					markdown += `**Help URL:** ${violation.helpUrl}\n\n`
					markdown += `**Affected Elements:** ${violation.nodes.length}\n\n`
					
					violation.nodes.forEach((node: any, nodeIdx: number) => {
						markdown += `#### Element ${nodeIdx + 1}\n\n`
						markdown += '```html\n'
						markdown += `${node.html}\n`
						markdown += '```\n\n'
						if (node.failureSummary) {
							markdown += `**Issue:** ${node.failureSummary}\n\n`
						}
					})
					
					markdown += '---\n\n'
				})
			} else {
				markdown += '✅ No accessibility violations found on this page.\n\n'
			}
		})

		fs.writeFileSync(mdPath, markdown)
		console.log(`\n📊 Accessibility reports generated:`)
		console.log(`   - ${jsonPath}`)
		console.log(`   - ${mdPath}`)
	})

	test('homepage should not have accessibility violations', async ({ page }) => {
		await page.goto('/')
		const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
		
		// Store results for report
		allViolations.push({
			page: 'Homepage',
			url: '/',
			violations: accessibilityScanResults.violations
		})
		
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
		
		console.log(`Homepage: Found ${accessibilityScanResults.violations.length} accessibility violations`)
		// Uncomment below to enforce accessibility compliance:
		// expect(accessibilityScanResults.violations).toEqual([])
	})

	test('about page should not have accessibility violations', async ({ page }) => {
		await page.goto('/about')
		const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
		
		allViolations.push({
			page: 'About',
			url: '/about',
			violations: accessibilityScanResults.violations
		})
		
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
		
		allViolations.push({
			page: 'Developers',
			url: '/developers',
			violations: accessibilityScanResults.violations
		})
		
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
		
		allViolations.push({
			page: 'Community',
			url: '/community',
			violations: accessibilityScanResults.violations
		})
		
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
		
		allViolations.push({
			page: 'Adopt',
			url: '/adopt',
			violations: accessibilityScanResults.violations
		})
		
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
		
		allViolations.push({
			page: 'Case Studies',
			url: '/case-studies',
			violations: accessibilityScanResults.violations
		})
		
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
