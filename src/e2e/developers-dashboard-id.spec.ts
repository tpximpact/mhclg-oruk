import { test, expect } from '@playwright/test'

test('can open a dashboard item detail from dashboard list', async ({ page }) => {
  await page.goto('/developers/dashboard')

  // Click the first dashboard item link to open its detail page
  const itemLink = page.locator('a[href^="/developers/dashboard/"]').first()
  await expect(itemLink).toBeVisible()
  await itemLink.click()

  // New page should have a developers/dashboard/ id in the url and show a heading
  await expect(page).toHaveURL(/\/developers\/dashboard\/.+/)
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
})
