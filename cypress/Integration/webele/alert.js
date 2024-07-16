describe('alert', () => {
    it('test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click();
        //Assert the message inside the alert
        cy.on('window:alert',(alertmessage)=>{
            expect(alertmessage).to.equal('Hello , share this practice page and share your knowledge')
            return true;
        })


        cy.get('#confirmbtn').click();
        cy.on('window:confirm',(message)=>{
            expect(message).to.eq('Hello , Are you sure you want to confirm?')
            return true; //it will click on Ok
            //return false;
        })
        
    });
});