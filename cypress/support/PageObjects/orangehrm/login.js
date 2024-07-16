class Login_po{

    EnterURL(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
    Login(){
        cy.get('input[name="username"]').type('Admin');
       //write locators for password and enter my password
        cy.get('input[type="password"]').type('admin123');
        //Locators for clicking on Login button.
        cy.get('button[type="submit"]').click();
    }
    Clickonforgotpassword(){
        cy.get('.orangehrm-login-forgot-header').click();
    }
}
export default Login_po;