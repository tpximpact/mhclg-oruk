import { flattenSite } from '../utilities/flattenSite'
import { slugify } from '../utilities/dynamicSection'
import fs from 'fs'
import { join } from 'path'
import { test, expect, Page } from '@playwright/test'

const getAllFiles = (contentFolder: string) => {
	const dir = join(process.cwd(), '/content', contentFolder)
	const dirents = fs.readdirSync(dir, { withFileTypes: true })
	return dirents
		.filter(dirent => dirent.isFile())
		.map(dirent => dirent.name)
		.filter(f => f !== '.DS_Store')
}

const site = flattenSite().filter(p => !p.offsite)
const nonDynamicPages = site.map(page => ({
	path: '/' + (page.urlPath ? page.urlPath : ''),
	lookFor: page.e2eTestLookFor
}))

const dynamicPages = site
	.filter(p => p.dynamic)
	.flatMap(root =>
		getAllFiles(root.contentPath).map(n => ({
			path: `${root.contentPath}/${slugify(n)}`,
			lookFor: root.e2eTestLookFor || 'open'
		}))
	)

const data = nonDynamicPages
	.concat(dynamicPages)
	.filter((value, index, self) => self.findIndex(v => v.path === value.path) === index)

test.describe('Page Content Validation Tests', () => {
	data.forEach(({ path, lookFor = 'open' }) => {
		test(`should find "${lookFor}" on ${path}`, async ({ page }: { page: Page}) => {
			// Navigate and capture response, then check status
			const response = await page.goto(path)
			expect(response).not.toBeNull()
			expect(response!.status()).toBe(200)

			const bodyText = await page.textContent('body')
			expect(bodyText).toContain(lookFor)
		})
	})
})
