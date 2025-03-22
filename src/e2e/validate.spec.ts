import { test, expect } from '@playwright/test'

test('validates the API endpoint URL successfully', async ({ page }) => {
	await page.goto('http://192.168.1.198:3000/developers/validator')
	await page.waitForSelector('h1:has-text("Check your ORUK compliance")')

	const inputField = page.getByRole('textbox', { name: 'URL' })
	await expect(inputField).toBeVisible()

	const apiUrl = 'https://oruk-api-2a920f51d6bb.herokuapp.com/api/mock'
	await inputField.fill(apiUrl)

	const validateButton = page.getByRole('button', { name: 'Check' })
	await expect(validateButton).toBeVisible()
	await validateButton.click()

	await page.waitForLoadState('networkidle')

	const successIndicator = page.locator('#overallResult')
	await expect(successIndicator).toContainText('Pass', { timeout: 10000 })
})
