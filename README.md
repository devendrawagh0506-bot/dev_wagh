# EPAM Website - Playwright Test Automation

This repository contains automated end-to-end tests for the EPAM website using Playwright and TypeScript.

## 🎯 Test Coverage

### Client Work Navigation Test
**File:** `tests/epam-client-work.spec.ts`

This test validates the user journey from the EPAM homepage to the Client Work page:

1. ✅ Navigate to https://www.epam.com/
2. ✅ Select "Services" from the header menu
3. ✅ Click the "Explore Our Client Work" link
4. ✅ Verify that the "Client Work" text is visible on the page

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <repository-name>
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## 🧪 Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode (with browser UI)
```bash
npm run test:headed
```

### Run tests in debug mode
```bash
npm run test:debug
```

### Run tests with UI mode (interactive)
```bash
npm run test:ui
```

### Run tests in a specific browser
```bash
npm run test:chromium
npm run test:firefox
npm run test:webkit
```

### View test report
```bash
npm run test:report
```

## 📁 Project Structure

```
.
├── tests/
│   └── epam-client-work.spec.ts   # Client Work navigation test
├── playwright.config.ts            # Playwright configuration
├── package.json                    # Project dependencies
└── README.md                       # This file
```

## 🔧 Configuration

The Playwright configuration is defined in `playwright.config.ts` and includes:

- **Browsers:** Chromium, Firefox, WebKit
- **Mobile Devices:** Pixel 5 (Chrome), iPhone 12 (Safari)
- **Reporters:** HTML, List, JUnit
- **Trace:** Enabled on first retry
- **Screenshots:** Captured on failure
- **Video:** Retained on failure

## 📊 Test Reports

After running tests, you can view the HTML report:

```bash
npm run test:report
```

The report includes:
- Test execution results
- Screenshots of failures
- Video recordings
- Execution traces

## 🛠️ Development

### Adding New Tests

1. Create a new test file in the `tests/` directory:
```typescript
import { test, expect } from '@playwright/test';

test.describe('Your Test Suite', () => {
  test('your test case', async ({ page }) => {
    // Your test code here
  });
});
```

2. Run your new test:
```bash
npx playwright test tests/your-test-file.spec.ts
```

### Best Practices

- Use `test.step()` for better reporting and organization
- Leverage Playwright's auto-waiting capabilities
- Use `expect` assertions from `@playwright/test`
- Implement Page Object Model for complex flows
- Keep tests independent and isolated

## 🐛 Troubleshooting

### Common Issues

**Issue:** Browsers not installed
```bash
npx playwright install
```

**Issue:** Tests timing out
- Increase timeout in `playwright.config.ts`
- Check network connectivity
- Verify the website is accessible

**Issue:** Flaky tests
- Enable retries in configuration
- Use proper waiting strategies
- Check for race conditions

## 📝 Notes

The test implementation includes workarounds for:
- Menu navigation issues (overlay elements)
- Direct URL navigation for reliability
- Explicit visibility checks

## 🤝 Contributing

1. Create a feature branch
2. Add your tests
3. Ensure all tests pass
4. Create a pull request

## 📄 License

ISC