///<reference types="cypress" />
describe('web table test2', () => {
    it('test2', () => {
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.xpath('//table[@name="courses"]/tbody/tr[9]/td[2]').should('include.text','Master Selenium Automation in simple Python Language')
        
        
        
    });
    it('test2', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath('//table[@name="courses"]/tbody/tr[9]/td').each(($element)=>{
            if($element.text().includes('Python')){
                cy.wrap($element).next().then((num)=>{
                    cy.log(num.text())
                })
            }
        })
        
    });
});

