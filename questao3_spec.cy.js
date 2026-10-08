describe('Validação do carrinho de compras no SauceDemo', () => {
    it('Deve fazer login, adicionar 3 produtos, remover 1 e validar o contador do carrinho', () => {
        // 1. Acessa o site e realiza o login com sucesso
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        // 2. Adiciona três produtos diferentes ao carrinho
        cy.get('.inventory_item').eq(0).find('button').click();
        cy.get('.inventory_item').eq(1).find('button').click();
        cy.get('.inventory_item').eq(2).find('button').click();

        // 3. Clique no botão "Remove" de um desses produtos (o primeiro)
        cy.get('.inventory_item').eq(0).find('button').click();

        // 4. Valida se o ícone do carrinho exibe exatamente o número "2"
        cy.get('.shopping_cart_badge')
            .should('be.visible')
            .and('have.text', '2');
    });
});