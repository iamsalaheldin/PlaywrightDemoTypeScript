# 🎭 Playwright E2E Test Suite

> Modern end-to-end testing with TypeScript, Page Object Model, and comprehensive reporting

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat&logo=playwright&logoColor=white)

## ✨ Features

- 🎯 **Page Object Model** - Clean, maintainable test structure
- 📊 **Dual Reporting** - HTML & Allure reports
- 🔧 **TypeScript** - Full type safety
- 🎬 **Rich Artifacts** - Screenshots, videos, traces
- 🚀 **CI Ready** - Configured for parallel execution

## 🏗️ Project Structure

```
📦 PlaywrightDemoTypeScript
├── 🧪 tests/
│   └── E2ETest.spec.ts          # Complete user journey test
├── 📄 pages/                    # Page Object Model
│   ├── PageObjectManager.ts     # Central page manager
│   ├── HomePage.ts
│   ├── SignUpAndLoginPage.ts
│   └── ... (other pages)
├── 🔧 fixtures/
│   └── TestSetup.ts             # Custom test fixtures
├── 📋 testData/
│   ├── signUpPageTestData.json
│   └── ... (other test data)
└── ⚙️ playwright.config.ts      # Test configuration
```

## 🚀 Quick Start

### 1️⃣ Install Dependencies
```bash
npm ci
npx playwright install
```

### 2️⃣ Run Tests
```bash
# Run all tests
npx playwright test

# Run with UI
npx playwright test --ui

# Run in headed mode
npx playwright test --headed
```

### 3️⃣ View Reports
```bash
# HTML Report (built-in)
npx playwright show-report

# Allure Report
npx allure-commandline generate ./allure-results --clean -o ./allure-report
npx allure-commandline open ./allure-report
```

## 📊 Test Coverage

Our E2E test covers the complete user journey:

- ✅ User registration and account creation
- ✅ Product browsing and selection  
- ✅ Shopping cart management
- ✅ Checkout and payment process
- ✅ Order confirmation

## 🛠️ Configuration

| Setting | Value |
|---------|-------|
| **Target Site** | `https://www.automationexercise.com/` |
| **Browser** | Chromium (Desktop Chrome) |
| **Execution** | Parallel |
| **Artifacts** | Screenshots, Videos, Traces |

## 💡 Tips

- 📁 JSON test data uses default imports: `import data from "./file.json"`
- 🎯 Always use `pageObjectManager` for page interactions
- 🔍 Check traces/videos in HTML reports for debugging

## 🔧 Troubleshooting

| Issue | Solution |
|-------|---------|
| Missing browsers | `npx playwright install` |
| Allure not found | `npm i -D allure-commandline` |
| Flaky tests | Check artifacts in HTML report |

---

<div align="center">
  <strong>Happy Testing! 🎭</strong>
</div>


