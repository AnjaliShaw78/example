///<reference types="cypress" />
///<reference types="cypress-xpath" />

describe('Practice tests', () => {
    it('test1 - URL assertion', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        //Asserting URL with the given enpoint
        cy.url().should('include','AutomationPractice');
        //Assert the Title of webpage
        cy.title().should('include','Practice Page');
        //Assert the visibility of the below textbox
        cy.get('[name="show-hide"]').should('be.visible');
        //Assert to check whether an element is invisible.
        cy.get('#hide-textbox').click(); //after clicking on hide,the element will disappear

        //this will type the value and assert the value.
        cy.get('.ui-autocomplete-input').type('Friday').should('have.value','Friday');
        //asserting whether checkbox has been checked
        cy.xpath("//*[@id='checkBoxOption1']").check().should('be.checked');
        //unchecked will uncheck on the checkbox
        cy.xpath("//*[@id='checkBoxOption1']").uncheck().should('not.be.checked');
        
    });
});