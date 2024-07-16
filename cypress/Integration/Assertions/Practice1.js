///<reference types="cypress" />
describe('Heroku', () => {
    it('test1', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.title().should('include','The Internet')
        
    });
});