import { test, expect } from '@playwright/test'

test('Register feed page', async ({ page }) => {
	await page.goto('http://192.168.1.198:3000/developers/register')
	await page.getByRole('textbox', { name: 'Name', exact: true }).click()
	await page.getByRole('textbox', { name: 'Name', exact: true }).fill('Test User')
	await page.getByRole('textbox', { name: 'Description' }).click()
	await page.getByRole('textbox', { name: 'Description' }).fill('Test')
	await page.getByRole('textbox', { name: 'URL', exact: true }).click()
	await page.getByRole('textbox', { name: 'URL', exact: true }).fill('example.com')
	await page.getByRole('textbox', { name: 'Publisher organisation name' }).click()
	await page.getByRole('textbox', { name: 'Publisher organisation name' }).fill('test')
	await page.getByRole('textbox', { name: 'Publisher organisation URL' }).click()
	await page.getByRole('textbox', { name: 'Publisher organisation URL' }).fill('test')
	await page.getByRole('textbox', { name: 'Publisher organisation email' }).click()
	await page.getByRole('textbox', { name: 'Publisher organisation email' }).fill('test')
	await page.getByRole('textbox', { name: 'Developer organisation name' }).click()
	await page.getByRole('textbox', { name: 'Developer organisation name' }).fill('test')
	await page.getByRole('textbox', { name: 'Developer organisation URL' }).click()
	await page.getByRole('textbox', { name: 'Developer organisation URL' }).fill('test')
	await page.getByRole('button', { name: 'Register' }).click()

	await page.waitForLoadState('networkidle')

	const successIndicator = page.locator('#success')
	await expect(successIndicator).toContainText('Registration request submitted', { timeout: 10000 })
})
