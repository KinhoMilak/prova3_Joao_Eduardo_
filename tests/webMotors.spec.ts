import { test, expect } from '@playwright/test';

test('Acessando a pagina e verificando botao de pesquisa', async ({ page }) => {
  await page.goto('https://www.webmotors.com.br/');
await expect(page.getByText ('Ver Ofertas')).toBeVisible();
});

test('localizar carro', async({page})=>{
  const caixaBusca = page.getByText('Digite marca ou modelodo carro');
  const btnBuscar = page.getByText('Ver Oferta');
  await caixaBusca.fill('Chevette');
  btnBuscar.click;
  await expect(page).toHaveURL('https://www.webmotors.com.br/carros/eshttps://www.webmotors.com.br/carros/estoque?lkid=1022&tipoveiculo=carros&estadocidade=S%C3%A3o%20Paulotoque?lkid=1022&tipoveiculo=carros');


})
test('Comprar carro usado ',async({page})=>{
  const vender = page.getByText('Comprar');
  const btnCarroUsado = page.getByText('carros usados');

  vender.focus;
btnCarroUsado.click;
await expect(page).toHaveURL('https://www.webmotors.https://www.webmotors.com.br/carros-usados/estoque?lkid=1000&estadocidade=S%C3%A3o%20Paulo');
});