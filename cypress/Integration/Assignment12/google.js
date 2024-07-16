describe('Google title', () => {
    it('test', () => {
        cy.visit('https://www.google.com/');
        cy.title().should('include','Google');
        
    });
});