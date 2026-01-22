import { defineConfig, devices } from '@playwright/test'
import path from 'path'
import dotenv from 'dotenv'

// Load test env file if present. Keep secrets out of VCS by using `.env.test`.
dotenv.config({ path: '.env.test' })

// Use process.env.PORT by default and fallback to port 3000
const PORT = process.env.PORT || 3000

// Set webServer.url and use.baseURL with the location of the WebServer respecting the correct set port
// Allow BASE_URL override for testing against external servers (e.g., Docker containers)
const baseURL = process.env.BASE_URL || `http://localhost:${PORT}`

// Reference: https://playwright.dev/docs/test-configuration
export default defineConfig({
  // Timeout per test
  timeout: 30 * 1000,
  // Test directory
  testDir: path.join(__dirname, '/src/e2e'),
  // If a test fails, retry it additional 2 times
  retries: 2,
  // Artifacts folder where screenshots, videos, and traces are stored.
  outputDir: 'test-results/',
  // Reporter to use
  reporter: process.env.CI ? [['html', { open: 'never' }], ['list']] : 'list',

  // Run your local dev server before starting the tests:
  // https://playwright.dev/docs/test-advanced#launching-a-development-web-server-during-the-tests
  // Skip webServer if BASE_URL is provided (for testing against external servers)
  webServer: process.env.BASE_URL
    ? undefined
    : {
        command: process.env.CI ? 'npm run dev:ci' : 'npm run dev',
        url: baseURL,
        timeout: 120 * 1000,
        reuseExistingServer: !process.env.CI,
        // Inject test database URL into the dev server environment when running tests
        // Build a safe env object to avoid passing undefined values to the web server
        env: (() => {
          const e: Record<string, string> = { NODE_ENV: 'test' }
          const db = process.env.MONGODB_DB
          if (db) e.MONGODB_DB = db
          return e
        })()
      },

  use: {
    // Use baseURL so to make navigations relative.
    // More information: https://playwright.dev/docs/api/class-testoptions#test-options-base-url
    baseURL,

    // Retry a test if its failing with enabled tracing. This allows you to analyze the DOM, console logs, network traffic etc.
    // More information: https://playwright.dev/docs/trace-viewer
    trace: 'retry-with-trace'

    // All available context options: https://playwright.dev/docs/api/class-browser#browser-new-context
    // contextOptions: {
    //   ignoreHTTPSErrors: true,
    // },
  },

  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome']
      }
    }
    // {
    //   name: 'Desktop Firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // },
    // {
    //   name: 'Desktop Safari',
    //   use: {
    //     ...devices['Desktop Safari'],
    //   },
    // },
    // Test against mobile viewports.
    /*
    {
      name: "Mobile Chrome",
      use: {
        ...devices["Pixel 5"],
      },
    },
    {
      name: "Mobile Safari",
      use: devices["iPhone 12"],
    },
    */
  ]
})
