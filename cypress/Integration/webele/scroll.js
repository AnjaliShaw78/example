describe('scroll', () => {
    it('test', () => {
        cy.visit('https://www.google.com/')
        cy.get('[title="Search"]').type('Masai{enter}')
        cy.scrollTo(0,1000); //x is horizontal,y is vertical
        cy.scrollTo('center'); //

        cy.contains('Maasai people').scrollIntoView().wait(2000).click();
        
    });
});