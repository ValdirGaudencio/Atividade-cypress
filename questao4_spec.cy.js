describe('Mapeamento do laptop mais caro no Demoblaze', () => {
    it('Deve acessar laptops, extrair o mais caro e validar se o valor é superior a $0', () => {
        // 1. Acessa o site Demoblaze
        cy.visit('https://www.demoblaze.com/');

        // 2. Clica na categoria "Laptops"
        cy.contains('a', 'Laptops').click();

        // 3. Aguarda explicitamente os elementos de preço carregarem no DOM
        cy.get('.card-block h5', { timeout: 15000 }).should('be.visible');

        // 4. Captura e analisa todos os preços dos laptops apresentados
        let precoMaximo = 0;
        let nomeMaisCaro = '';

        cy.get('.card-block').each(($card) => {
            const precoTexto = $card.find('h5').text().replace('$', '').trim();
            const preco = parseFloat(precoTexto);
            const nome = $card.find('.card-title a').text().trim();

            if (!isNaN(preco) && preco > precoMaximo) {
                precoMaximo = preco;
                nomeMaisCaro = nome;
            }
        }).then(() => {
            // Regista no log do Cypress o resultado obtido
            cy.log(`Laptop mais caro: ${nomeMaisCaro} - $${precoMaximo}`);

            // 5. Asserção garantindo que o valor é estritamente maior que $0
            expect(precoMaximo).to.be.greaterThan(0);
        });
    });
});