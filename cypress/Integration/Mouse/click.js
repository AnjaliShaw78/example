describe('Mouse actions test', () => {
    it.skip('Right click test', () => {
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
        cy.xpath('*//*[.="right click me"]').rightclick();
        cy.xpath('//button').dblclick();
        
    });
    it('hover test1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //Mouse hover an element 
        //this will invoke the element to show what the element is containg
        cy.get('#mousehover').invoke('show')
        //In cypress,when an element is not clicking using only click()
        //we can tell cypress to click on it forceably
        cy.contains('Top').click({force:true});
        cy.url().should('include','top');//Asserting URL after clicking on top.
        
    });
    it('Mouse hover2 ', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#mousehover').trigger('mouseover');
        cy.contains('Top').click({force:true});
        cy.url().should('include','top');


        
    });
});