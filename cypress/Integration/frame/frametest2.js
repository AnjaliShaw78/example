///<reference types="cypress" />
///<reference types="cypress-xpath" />
describe('Heroku', () => {
    it('test1', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe');
            cy.frameLoaded('#mce_0_ifr');
            cy.iframe().contains('Your content goes here').click();
        
        
    });
    it('double click', () => {
        cy.visit('https://api.jquery.com/dblclick/');
        cy.xpath('(//button)[1]').dblclick({force:true});
        
    });
});