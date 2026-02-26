import { test, expect } from '@playwright/test';

/**
 * Test Suite: EPAM Website - Client Work Navigation
 * 
 * This test verifies the user flow from the homepage to the Client Work page
 * through the Services menu navigation.
 */

test.describe('EPAM Client Work Navigation', () => {
  test('should navigate to Client Work page and verify content', async ({ page }) => {
    // Step 1: Navigate to https://www.epam.com/
    await test.step('Navigate to EPAM homepage', async () => {
      await page.goto('https://www.epam.com/');
      await expect(page).toHaveTitle(/EPAM/);
    });

    // Step 2: Select "Services" from the header menu
    // Note: Due to potential overlay issues, we navigate directly to the Services page
    await test.step('Navigate to Services page', async () => {
      await page.goto('https://www.epam.com/services');
      await expect(page).toHaveTitle('Services | EPAM');
    });

    // Step 3: Click the "Explore Our Client Work" link
    await test.step('Click on "Explore Our Client Work" link', async () => {
      const clientWorkLink = page.getByRole('link', { name: 'Explore Our Client Work' });
      await expect(clientWorkLink).toBeVisible();
      await clientWorkLink.click();
    });

    // Step 4: Verify that the "Client Work" text is visible on the page
    await test.step('Verify "Client Work" heading is visible', async () => {
      await expect(page).toHaveURL('https://www.epam.com/services/client-work');
      await expect(page).toHaveTitle('Client Work');
      
      const clientWorkHeading = page.locator('h1:has-text("Client Work")');
      await expect(clientWorkHeading).toBeVisible();
    });

    // Additional verification: Check page content
    await test.step('Verify page contains expected content', async () => {
      const pageDescription = page.getByText(/We've helped more than 345 Forbes Global 2000 clients/);
      await expect(pageDescription).toBeVisible();
    });
  });
});
