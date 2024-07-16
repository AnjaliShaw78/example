describe('datepicker', () => {
    it('test1', () => {
        cy.visit('https://jqueryui.com/datepicker/')
        cy.get('.hasDatepicker').type('07/07/2024{enter}');
        
    });
});