# Playwright API Mocking – Technical Assessment

## Overview
This project demonstrates frontend API testing using Playwright and TypeScript by mocking network requests for a money transfer feature.

The backend is not required. All API responses are intercepted using Playwright's `page.route()`.

---

## Tech Stack
- Playwright
- TypeScript
- Page Object Model (POM)
- HTML Test Report

---

## Test Scenarios

### Test A – Successful Transfer
- Endpoint: POST /api/transfer
- Mocked Response: 200 OK
```json
{
  "Status": "Success",
  "TransactionID": "12345"
}
```
### Test B – Failed Transfer
- Endpoint: POST /api/transfer
- Mocked Response (Intentionally incorrect)

## **Task 2 – E2E UI Flow (Public Demo Site)**

**Scenario:**  
Perform a single end-to-end workflow on a public demo site with price validation (Fintech twist).

**Steps:**
1. Navigate to SauceDemo Website
2. Login using:
   - Username: `standard_user`
   - Password: `secret_sauce`
3. Add the first product to the cart  
4. Go to the cart and verify the product is present  
5. Verify the product price is in a valid currency format (e.g., `$29.99`)

**Files:**  
- `pages/ShopPage.ts` – Page Object  
- `tests/shop.spec.ts` – Test script  

**Command to run:**

```bash
npm test

