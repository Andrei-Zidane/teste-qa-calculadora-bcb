import { test, expect } from '@playwright/test';

test('Página da calculadora carrega corretamente', async ({ page }) => {

  await page.goto('https://www3.bcb.gov.br/CALCIDADAO/publico/corrigirPorIndice.do');

  await page.waitForLoadState('domcontentloaded');

  await expect(page.locator('body')).toBeVisible();

});