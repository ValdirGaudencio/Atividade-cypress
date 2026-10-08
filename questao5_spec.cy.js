describe('Rastreamento de ofertas no SauceDemo (< $20.00)', () => {
    it('Deve fazer login, mapear todos os produtos e exibir no console apenas os que custam menos de $20.00', () => {
        // 1. Acessa o site e realiza o login
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        // 2. Mapeia todos os produtos na página inicial
        cy.get('.inventory_item').each(($el) => {
            const nome = $el.find('.inventory_item_name').text().trim();
            const precoTexto = $el.find('.inventory_item_price').text().replace('$', '').trim();
            const preco = parseFloat(precoTexto);

            // 3. Exibe no console apenas os produtos com valor inferior a $20.00
            if (preco < 20.00) {
                cy.log(`OFERTA ENCONTRADA: ${nome} - $${preco.toFixed(2)}`);
                console.log(`Oferta: ${nome} - $${preco.toFixed(2)}`);
            }
        });
    });
});