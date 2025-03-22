import { test, expect, Page } from '@playwright/test'

async function setupValidatorPage(page: Page) {
	await page.goto('http://192.168.1.198:3000/developers/validator')
	await page.waitForSelector('h1:has-text("Check your ORUK compliance")')

	const inputField = page.getByRole('textbox', { name: 'URL' })
	await expect(inputField).toBeVisible()

	const validateButton = page.getByRole('button', { name: 'Check' })
	await expect(validateButton).toBeVisible()

	return { inputField, validateButton }
}

async function validateApiEndpoint(page: Page, apiUrl: string, expectedResult: 'Pass' | 'Fail') {
	const { inputField, validateButton } = await setupValidatorPage(page)

	await inputField.fill(apiUrl)
	await validateButton.click()
	await page.waitForLoadState('networkidle')

	const successIndicator = page.locator('#overallResult')
	await expect(successIndicator).toContainText(expectedResult, { timeout: 10000 })
}

test('validates the API endpoint URL for pass', async ({ page }) => {
	const apiUrl = 'https://oruk-api-2a920f51d6bb.herokuapp.com/api/mock'
	await validateApiEndpoint(page, apiUrl, 'Pass')
})

test('validates the API endpoint URL for fail', async ({ page }) => {
	const apiUrl = 'https://oruk-api-2a920f51d6bb.herokuapp.com/api/mock/fail'
	await validateApiEndpoint(page, apiUrl, 'Fail')
})
