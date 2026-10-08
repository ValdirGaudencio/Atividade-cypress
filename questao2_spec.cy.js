describe('Validação de elemento dinâmico e carregamento (Loading)', () => {
    it('Deve aguardar o loading desaparecer e validar a exibição do texto Hello World!', () => {
        // 1. Acessa o site alvo
        cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1');

        // 2. Clica no botão "Start"
        cy.get('#start button').click();

        // 3. Aguarda o spinner/loader (#loading) desaparecer da tela
        // O Cypress aguarda automaticamente com timeout (pode-se definir timeout maior se necessário)
        cy.get('#loading', { timeout: 10000 }).should('not.be.visible');

        // 4. Valida se o texto final "Hello World!" é exibido corretamente
        cy.get('#finish h4')
            .should('be.visible')
            .and('have.text', 'Hello World!');
    });
});