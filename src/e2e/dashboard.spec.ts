import { test, expect } from '@playwright/test'

test('developers dashboard loads', async ({ page }) => {
  await page.goto('/developers/dashboard')
  await expect(page.getByRole('rowheader', { name: 'Feed passes?' })).toBeVisible()
})
