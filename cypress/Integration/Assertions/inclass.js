describe('Automation test store', () => {
    it('test Contact Us', () => {
        cy.visit('https://automationteststore.com/index.php?rt=account/login');
        cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click();
        cy.get('input[name="first_name"]').type('Anjali');
        cy.get('input[id="ContactUsFrm_email"]').type('shawanjali0708@gmail.com');
        cy.get('textarea[id="ContactUsFrm_enquiry"]').type('How can I track my order');
        cy.get('button[title="Submit"]').click();
        cy.get('.mb40').should('contain.text','Your enquiry has been successfully sent to the store owner!')

        
    });
});