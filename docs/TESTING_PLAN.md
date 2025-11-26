TESTING: Routes End-to-End
(This test plan is specific to the pull request)

Prerequisites
- Use an incognito/private browser window to simulate clean sessions.

Start the site
- Staging: `https://staging.openreferraluk.org`
- Production: `https://openreferraluk.org`

General tester notes
- Open browser DevTools (Console & Network). Clear cookies/localStorage or use private mode.
- Record console errors and failed network requests.
- Capture screenshots for failures and significant success screens.

Routes to test

1) `community/directory`
- Open: `https://staging.openreferraluk.org/community/directory`.
  - Expected: 
    - page loads with a list/grid of services
    - table header options for sorting.
- Sorting: sort by ascending and descending for each column.
  - Expected: 
    - results update to include correct sort order.  
    - column headers display correct sort column and sort order.
    - page url updates to display correct sorting.
- Click an entry:
  - Expected: navigates to item detail (URL/title update) or reveals inline details.
- Accessibility: tab through entries; focus lands on interactive items; return key actions the item.
- Compare all tests with live url: `https://openreferraluk.org/community/directory`

2) `developers/dashboard`
- Open: `https://staging.openreferraluk.org/developers/dashboard`.
  - Expected: 
    - page loads with a list/grid of services
    - table header options for sorting.
- Sorting: sort by ascending and descending for each column.
  - Expected: 
    - results update to include correct sort order.  
    - column headers display correct sort column and sort order.
    - page url updates to display correct sorting.
- Click an entry:
  - Expected: navigates to item detail (URL/title update) or reveals inline details.
- Accessibility: tab through entries; focus lands on interactive items; return key actions the item.
- Compare all tests with live url: `https://openreferraluk.org/developers/dashboard`

3) `developers/register`
- Open: `https://staging.openreferraluk.org/developers/register`.
  - Expected: registration form with labeled fields and submit button.
- Validation:
  - Submit with blanks — Expected: inline validation messages, no network POST.
  - Invalid email — Expected: client-side validation error.
- Successful submit:
  - Enter valid input — Expected: POST request (check Network), 200/201 response, and success message.
- Github Issue Creation:
  - Check url on success page directs to correct github issue.
- Capture: request endpoint, payload, response code, and response body.

4) `developers/dashboard/[id]`
- From dashboard/directory, click an items test date to open its detail page.
  - Expected: detail view with title, metadata, and edit/return controls.
- Valid `id`: content matches selected item; no console errors.
- Invalid `id`: visit a non-existent id (e.g., `/developers/dashboard/999999`).
  - Expected: 404 or friendly error message—record exact behavior.

Cross-cutting checks
- Error handling: simulate network failures (throttle/offline) — app surfaces useful errors.
- Console: no uncaught exceptions during normal flows.
- Basic accessibility: fields have labels, images have alt text, focus order sensible.
- Confirm consistency across browsers (Chrome, Safari, Firefox, Edge) and mobile.

Reporting
- For any failure include:
  - Steps to reproduce (exact clicks/inputs).
  - Screenshot(s) and timestamp.
  - Network request details (endpoint, payload, response status, response body).
  - Console errors and stack traces.

Cleanup
- Remove any test accounts created or report test data needing removal.
- Clear cookies/localStorage after tests.

Notes
- If behavior diverges from expected (e.g., redirects elsewhere), record the exact flow and server responses.
