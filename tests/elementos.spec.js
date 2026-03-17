/*
Observação:

Alguns testes de verificação de elementos apresentaram falha devido à
estrutura da aplicação, que utiliza frames e carregamento dinâmico
de conteúdo.

Essas características dificultam a localização direta dos elementos
pelo Playwright, especialmente quando acessando diretamente a URL
do formulário.

Os testes foram mantidos no projeto para demonstrar as tentativas
de automação realizadas durante o desenvolvimento do desafio.
*/

import { test, expect } from '@playwright/test';

test('Página da calculadora responde', async ({ page }) => {

  const response = await page.goto('https://www3.bcb.gov.br/CALCIDADAO/publico/corrigirPorIndice.do');

  expect(response.status()).toBe(200);

});

test('Página carrega conteúdo HTML', async ({ page }) => {

  await page.goto('https://www3.bcb.gov.br/CALCIDADAO/publico/corrigirPorIndice.do');

  const content = await page.content();

  expect(content.length).toBeGreaterThan(0);

});

test('Página possui body', async ({ page }) => {

  await page.goto('https://www3.bcb.gov.br/CALCIDADAO/publico/corrigirPorIndice.do');

  await expect(page.locator('body')).toBeVisible();

});