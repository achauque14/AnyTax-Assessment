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
