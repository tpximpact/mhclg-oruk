import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.1.198:3000/developers/dashboard');
  await page.getByRole('rowheader', { name: 'Feed passes?' })
  await expect(page.getByRole('rowheader', { name: 'Feed passes?' })).toBeVisible()
});