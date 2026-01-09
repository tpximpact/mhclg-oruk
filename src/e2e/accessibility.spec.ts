import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('Accessibility Tests', () => {
	test('homepage should not have accessibility violations', async ({ page }) => {
		await page.goto('/')
		const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
		expect(accessibilityScanResults.violations).toEqual([])
	})

	test('about page should not have accessibility violations', async ({ page }) => {
		await page.goto('/about')
		const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
		expect(accessibilityScanResults.violations).toEqual([])
	})

	test('developers page should not have accessibility violations', async ({ page }) => {
		await page.goto('/developers')
		const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
		expect(accessibilityScanResults.violations).toEqual([])
	})

	test('community page should not have accessibility violations', async ({ page }) => {
		await page.goto('/community')
		const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
		expect(accessibilityScanResults.violations).toEqual([])
	})

	test('adopt page should not have accessibility violations', async ({ page }) => {
		await page.goto('/adopt')
		const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
		expect(accessibilityScanResults.violations).toEqual([])
	})

	test('case studies page should not have accessibility violations', async ({ page }) => {
		await page.goto('/case-studies')
		const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
		expect(accessibilityScanResults.violations).toEqual([])
	})
})
