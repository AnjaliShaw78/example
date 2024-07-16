///<reference types="cypress" />


describe('OrangeHRM Suite', () => {
    it('Login Test1', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin');
       //write locators for password and enter my password
        cy.get('input[type="password"]').type('admin123');
        //Locators for clicking on Login button.
        cy.get('button[type="submit"]').click();
        cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click();
        
    });
    it('test2', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('')

        
    });
});
    
        