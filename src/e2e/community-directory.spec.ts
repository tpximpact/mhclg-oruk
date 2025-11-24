import { test, expect } from '@playwright/test'

test('community directory page loads and shows heading', async ({ page }) => {
  await page.goto('/community/directory')
  await expect(page.getByRole('heading', { level: 1, name: 'Verified feed directory' })).toBeVisible()
})
