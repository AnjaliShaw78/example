///<reference types="cypress" />
describe('Anjali', () => {
    it('frame test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // step 1 - load the frame with Locator for iframe using frameloaded()
        cy.frameLoaded('#courses-iframe');
        // to interact with elements inside the frame use 
        cy.iframe().contains('Blog').click();
        
    });
    
});