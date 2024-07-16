///<reference types="cypress" />
///<reference types="cypress-Xpath" />




describe('radio and checkbox tests', () => {
    it('button', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath('(//input[@class="radioButton"])[1]').check().should('be.visible').and('be.checked').and('have attr','type','radio')

        
    });
    it('checkboxes', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath('(//label/input[@type="checkbox"])[1]').check().should('')

        
    });
});