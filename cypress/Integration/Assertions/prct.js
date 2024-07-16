describe('Practice Test', () => {
    it('test1 - URL assertion', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.url().should('include','AutomationPractice')
        
    });
});