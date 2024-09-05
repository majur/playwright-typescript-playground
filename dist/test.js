"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('basic test', async ({ page }) => {
    await page.goto('https://example.com');
    const title = await page.title();
    (0, test_1.expect)(title).toBe('Example Domain');
});
