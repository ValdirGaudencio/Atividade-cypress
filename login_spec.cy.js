describe('Validação de mensagem de erro no Login', () => {
    it('Deve exibir mensagem de erro e classe CSS correta ao tentar logar com campos em branco', () => {

        cy.visit('https://the-internet.herokuapp.com/login');


        cy.get('button[type="submit"]').click();


        cy.get('#flash')
            .should('be.visible')
            .and('contain.text', 'Your username is invalid!')
            .and('have.class', 'error');
    });
});