describe('windows and tabs', () => {
    it.only('tab test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.xpath('//*[.="Open Tab"]').invoke('removeAttr','target').click({force:true})

        cy.origin('https://www.qaclickacademy.com/',()=>{
            //whatever actions that i have to perform in this url
            //that code i am going to write in this function
            cy.contains('Access all our Courses').click();       
            })
        
    });
    it('test2', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.xpath('//*[.="Open Window"]').invoke('removeAttr','').click()
        cy.origin('https://www.qaclickacademy.com/',()=>{
            cy.contains('Access all our Courses').click();
        })


        
    });
});