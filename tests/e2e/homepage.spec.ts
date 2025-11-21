import { expect, test } from '@playwright/test';

test('homepage loads successfully', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle(/West Papua Care/);
});

test('navigation is visible', async ({ page }) => {
	await page.goto('/');
	const nav = page.locator('nav');
	await expect(nav).toBeVisible();
});
