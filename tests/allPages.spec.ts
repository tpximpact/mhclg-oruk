import { test, expect } from '@playwright/test';
import fs from 'fs'
 
const getAllRoutes = async () => {
  const SITEMAP_PATH = './content/sitemap.json';
  const allRoutes = {
    'http://localhost:3000/updates': "News from ORUK",
    'http://localhost:3000/updates/1001': "ORUK Update"
  }
/*
  try {
    const data = await fs.promises.readFile(SITEMAP_PATH, 'utf8');
    const allRoutes = JSON.parse(data);
    return allRoutes.filter((route) => route.contentPath !== "/home" && route.contentPath !== "/not-found");
  } catch (error) {
    console.error(`Error reading sitemap: ${error.message}`);
    throw error;
  }*/
 return allRoutes
};

test('validator: pass + warnings example', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Check your ORUK compliance' }).click();
  await page.getByRole('link', { name: 'Pass (with warnings)' }).click();
  await expect(page.getByRole('main')).toContainText('Overall result: Pass');
});

async function testRoutes(o) {
  for (const k of Object.keys(o)) {
    test(`Test ${k}`, async ({ page }) => {
      await page.goto(k);
      await expect(page).toHaveTitle(o[k]);
    });
  }
}

const testThese = getAllRoutes()
testRoutes(testThese);


  /*

await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Check your ORUK compliance' }).click();
  await page.getByRole('link', { name: 'Pass (with warnings)' }).click();
  await expect(page.getByRole('main')).toContainText('Overall result: Pass');

  */