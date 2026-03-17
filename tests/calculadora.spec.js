import { test, expect } from '@playwright/test';

test('Calcular correção com dados válidos', async ({ page }) => {

  await page.goto('https://www3.bcb.gov.br/CALCIDADAO/publico/corrigirPorIndice.do?method=corrigirPorIndice');

  // Pequeno delay necessário devido à forma como a página carrega scripts
  await page.waitForTimeout(3000);

  // Aguarda carregamento da rede
  await page.waitForLoadState('networkidle');

  /*
  Observação:

  Durante o desenvolvimento da automação foi identificado que alguns elementos
  da aplicação possuem comportamento instável devido à estrutura legada da página.

  Mesmo após diferentes tentativas de localização de elementos, o dropdown de índices
  apresentou dificuldades de interação estável via Playwright.

  O código abaixo representa a tentativa de automação do fluxo principal da aplicação.
  */

  // selecionar índice
  await page.selectOption('select[name="selIndice"]', {
    label: 'IGP-M (FGV) - a partir de 06/1989'
  });

  // preencher formulário
  await page.fill('input[name="dataInicial"]', '01/2020');
  await page.fill('input[name="dataFinal"]', '01/2023');
  await page.fill('input[name="valor"]', '1000');

  // executar cálculo
  await page.locator('input[value="Corrigir valor"]').click();

  // validar resultado
  await expect(page.locator('text=Valor corrigido')).toBeVisible();

});