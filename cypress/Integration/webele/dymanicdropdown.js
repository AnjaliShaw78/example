describe('dynamic dropdown', () => {
    it('test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.ui-autocomplete-input').type('Do')
        //iterate over all the options
        cy.get('ui-menu-item').each(($option)=>{
            if($option.text()=='Dominica'){
                cy.wrap($country).click();
            }
        })
        
    });
    it.only('dynamic dropdown2', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        
    });
});