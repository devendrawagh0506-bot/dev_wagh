# Test Documentation: EPAM Client Work Navigation

## Test Overview

**Test Name:** EPAM Client Work Navigation Test  
**Test File:** `tests/epam-client-work.spec.ts`  
**Framework:** Playwright with TypeScript  
**Test Type:** End-to-End (E2E) UI Test  
**Priority:** High  

## Test Objective

Verify that users can successfully navigate from the EPAM homepage to the Client Work page through the Services menu and that the Client Work page displays correctly.

## Test Scenario

### User Story
As a potential client visiting the EPAM website, I want to explore the company's client work examples so that I can evaluate their expertise and past projects.

### Preconditions
- The EPAM website (https://www.epam.com/) is accessible
- The Services page is available
- The Client Work page is available
- Browser is capable of running JavaScript

## Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Navigate to https://www.epam.com/ | Homepage loads successfully with EPAM title |
| 2 | Navigate to Services page | Services page loads with title "Services \| EPAM" |
| 3 | Click "Explore Our Client Work" link | Link is visible and clickable |
| 4 | Verify navigation to Client Work page | URL is https://www.epam.com/services/client-work |
| 5 | Verify page title | Page title is "Client Work" |
| 6 | Verify "Client Work" heading | H1 heading containing "Client Work" is visible |
| 7 | Verify page content | Description text about Forbes Global 2000 clients is visible |

## Test Implementation Details

### Technology Stack
- **Test Framework:** Playwright Test
- **Language:** TypeScript
- **Assertion Library:** Playwright's built-in expect
- **Browsers Tested:** Chromium, Firefox, WebKit, Mobile Chrome, Mobile Safari

### Key Features
- **Test Steps:** Organized using `test.step()` for better reporting
- **Assertions:** Multiple verification points to ensure page integrity
- **Error Handling:** Graceful handling of navigation issues
- **Wait Strategies:** Implicit waits through Playwright's auto-waiting

### Code Structure
```typescript
test.describe('EPAM Client Work Navigation', () => {
  test('should navigate to Client Work page and verify content', async ({ page }) => {
    // Step-by-step implementation with explicit verification
  });
});
```

## Test Data

| Field | Value |
|-------|-------|
| Homepage URL | https://www.epam.com/ |
| Services URL | https://www.epam.com/services |
| Client Work URL | https://www.epam.com/services/client-work |
| Link Text | "Explore Our Client Work" |
| Expected Heading | "Client Work" |

## Expected Results

### Success Criteria
✅ All navigation steps complete without errors  
✅ URLs match expected values  
✅ Page titles are correct  
✅ Key content elements are visible  
✅ Test completes within timeout limits  

### Failure Scenarios
❌ Navigation timeout  
❌ Page title mismatch  
❌ Missing or hidden elements  
❌ Incorrect URL after navigation  
❌ Content not loaded  

## Known Issues & Workarounds

### Issue 1: Menu Overlay
**Problem:** Direct clicking on the Services menu may be blocked by overlay elements  
**Workaround:** Direct navigation to the Services page URL  
**Status:** Implemented in test

### Issue 2: Async Content Loading
**Problem:** Some page elements may load asynchronously  
**Solution:** Playwright's auto-waiting mechanism handles this  
**Status:** No action needed

## Performance Metrics

| Metric | Expected Value | Actual Value |
|--------|---------------|--------------|
| Test Duration | < 30 seconds | ~5-10 seconds |
| Page Load Time | < 3 seconds per page | Variable |
| Total Assertions | 7 | 7 |

## Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome/Chromium | Latest | ✅ Supported |
| Firefox | Latest | ✅ Supported |
| Safari/WebKit | Latest | ✅ Supported |
| Mobile Chrome | Latest | ✅ Supported |
| Mobile Safari | Latest | ✅ Supported |

## Test Maintenance

### When to Update
- EPAM website structure changes
- URL paths are modified
- Link text or heading changes
- New navigation patterns are introduced

### Dependencies
- Playwright version: ^1.41.0
- TypeScript version: ^5.3.3
- Node.js version: >= 18

## Execution Environment

### Local Execution
```bash
npm test
```

### CI/CD Integration
```yaml
# Example GitHub Actions workflow
- name: Run Playwright tests
  run: |
    npm install
    npx playwright install
    npm test
```

### Docker Execution
```bash
docker run -it --rm -v $(pwd):/work -w /work mcr.microsoft.com/playwright:latest npm test
```

## Reporting

### Generated Reports
- **HTML Report:** Detailed test results with screenshots
- **JUnit Report:** CI/CD integration compatible
- **Console Output:** Real-time test execution log

### Artifacts
- Screenshots on failure
- Videos on failure
- Execution traces for debugging

## Troubleshooting Guide

### Test Fails at Homepage Navigation
**Possible Causes:**
- Network connectivity issues
- Website is down
- DNS resolution problems

**Solutions:**
- Check internet connection
- Verify website is accessible in browser
- Check for proxy or firewall issues

### Test Fails at Services Link Click
**Possible Causes:**
- Link selector changed
- Page structure modified
- Element is not visible

**Solutions:**
- Update selector in test code
- Check for website updates
- Inspect element in browser DevTools

### Test Times Out
**Possible Causes:**
- Slow network connection
- Page loading issues
- Resource-heavy page

**Solutions:**
- Increase timeout in configuration
- Check network speed
- Test on different network

## Future Enhancements

### Planned Improvements
1. Add Page Object Model (POM) pattern
2. Implement data-driven testing
3. Add visual regression testing
4. Include accessibility testing
5. Add API testing for backend validation

### Test Coverage Expansion
- Test different user flows to Client Work page
- Test mobile-specific navigation
- Test with different user roles/personas
- Add negative test scenarios

## References

- [Playwright Documentation](https://playwright.dev/)
- [EPAM Website](https://www.epam.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)

## Change Log

| Date | Version | Changes | Author |
|------|---------|---------|--------|
| 2025-02-26 | 1.0.0 | Initial test implementation | Automation Team |

## Contact

For questions or issues related to this test:
- Create an issue in the repository
- Contact the QA team
- Review the test execution logs
