import { test, expect } from '@playwright/test'

test('developers register page loads', async ({ page }) => {
  await page.goto('/developers/register')
  await expect(page.getByRole('heading', { level: 1, name: 'Register your feed' })).toBeVisible()
})

test('developers register page submits form', async ({ page }) => {
  await page.goto('/developers/register')

  await page.getByRole('textbox', { name: 'Name', exact: true }).click()
  await page.getByRole('textbox', { name: 'Name', exact: true }).fill('Test User')

  await page.getByRole('textbox', { name: 'Description' }).click()
  await page.getByRole('textbox', { name: 'Description' }).fill('Test')

  await page.getByRole('textbox', { name: 'URL', exact: true }).click()
  await page.getByRole('textbox', { name: 'URL', exact: true }).fill('https://example.com')

  await page.getByRole('textbox', { name: 'Publisher organisation name' }).click()
  await page.getByRole('textbox', { name: 'Publisher organisation name' }).fill('test')

  await page.getByRole('textbox', { name: 'Publisher organisation URL' }).click()
  await page
    .getByRole('textbox', { name: 'Publisher organisation URL' })
    .fill('https://example.com')

  await page.getByRole('textbox', { name: 'Publisher organisation email' }).click()
  await page
    .getByRole('textbox', { name: 'Publisher organisation email' })
    .fill('publicITteam@org.com')

  await page.getByRole('textbox', { name: 'Developer organisation name' }).click()
  await page.getByRole('textbox', { name: 'Developer organisation name' }).fill('test')

  await page.getByRole('textbox', { name: 'Developer organisation URL' }).click()
  await page
    .getByRole('textbox', { name: 'Developer organisation URL' })
    .fill('https://example.com')

  await page.getByRole('button', { name: 'Register' }).click()

  await page.waitForLoadState('networkidle')

  const successIndicator = page.locator('#success')
  await expect(successIndicator).toContainText('Registration request submitted', { timeout: 10000 })
})
