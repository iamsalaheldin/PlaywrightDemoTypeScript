## Playwright Demo TypeScript

End‑to‑end UI test suite using Playwright Test, TypeScript, and the Page Object Model (POM). HTML and Allure reports are supported out of the box.

### Project Design

- **Test runner**: `@playwright/test` with a single project: Chromium.
- **Base URL**: Defined in `playwright.config.ts` (`https://www.automationexercise.com/`).
- **Page Object Model**: Central `PageObjectManager` constructs and exposes strongly‑typed page objects (e.g., `HomePage`, `SignUpAndLoginPage`, `ProductsPage`).
- **Fixtures**: `fixtures/TestSetup.ts` extends Playwright's base `test` and provides a `pageObjectManager` fixture. Navigation to the home page happens in this fixture.
- **Test data**: JSON under `testData/` and imported as default JSON modules in tests.
- **Reporting**: Playwright HTML and Allure are configured in `playwright.config.ts`.

### Project Structure

```
.
├─ fixtures/
│  └─ TestSetup.ts                # Provides pageObjectManager fixture
├─ pages/                         # POM classes + PageObjectManager
│  ├─ PageObjectManager.ts
│  ├─ HomePage.ts
│  ├─ SignUpAndLoginPage.ts
│  ├─ AccountCreationPage.ts
│  ├─ AccountCreatedPage.ts
│  ├─ ProductsPage.ts
│  ├─ ProductViewPage.ts
│  ├─ CartPage.ts
│  ├─ CheckOutPage.ts
│  ├─ PaymentPage.ts
│  └─ OrderCompletedPage.ts
├─ tests/
│  ├─ E2ETest.spec.ts             # Primary end‑to‑end flow
│  └─ example.spec.ts
├─ testData/                      # JSON test data files
│  ├─ signUpPageTestData.json
│  ├─ AccountCreationPageTestData.json
│  └─ PaymentTestData.json
├─ playwright.config.ts           # Runner, reporters, devices, timeouts
├─ package.json
└─ README.md
```

### Setup

```bash
# Install dependencies
npm ci

# Install Playwright browsers
npx playwright install
```

### Running Tests

```bash
# Run all tests (Chromium, parallel per config)
npx playwright test

# Run a specific test file
npx playwright test tests/E2ETest.spec.ts

# Headed mode
npx playwright test --headed

# UI mode (test explorer)
npx playwright test --ui
```

### Reports and Artifacts

- **HTML Report** (built‑in):

```bash
# After a test run
npx playwright show-report
```

- **Allure Report**:
  - The `allure-playwright` reporter is enabled; test runs produce `./allure-results`.
  - To generate/open a report you need the Allure CLI. Either:
    - Use NPX on demand:

```bash
npx allure-commandline generate ./allure-results --clean -o ./allure-report
npx allure-commandline open ./allure-report
```

    - Or install locally (optional):

```bash
npm i -D allure-commandline
npx allure generate ./allure-results --clean -o ./allure-report
npx allure open ./allure-report
```

- **Traces / Screenshots / Videos**:
  - Configured in `playwright.config.ts` (`trace: on-first-retry`, `screenshot: on`, `video: on`).
  - Open a trace:

```bash
npx playwright show-trace path/to/trace.zip
```

### Test Coverage

- **Functional coverage (what is exercised):** The `E2ETest` walks through account signup, account creation, navigating products, adding to cart, checkout, payment, and order completion using POM flows. Expand scenarios by adding more `*.spec.ts` files under `tests/` and reusing page objects.
- **Code coverage (lines/statements):** Classic line coverage of the target website is not applicable for an external AUT. If you need JS app coverage for your own app, instrument the app build and integrate with coverage tools (e.g., `nyc`/Istanbul) or a custom coverage setup. This repo focuses on functional E2E coverage with rich Playwright/Allure reporting.

### Tips

- Import JSON data as a default import in TypeScript tests (e.g., `import data from "../testData/file.json"`).
- Prefer interacting through page objects via `pageObjectManager` to keep tests readable and maintainable.

### Troubleshooting

- If Allure commands are not found, install the CLI locally (`npm i -D allure-commandline`) or use `npx allure-commandline`.
- If browsers are missing, run `npx playwright install`.
- For flaky tests, inspect traces/videos from the HTML report.


