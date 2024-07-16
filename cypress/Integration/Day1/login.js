///<reference types="cypress" />


describe('OrangeHRM Suite', () => {
    it('Login Test1', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        
       //I have to write locator for username and enter my user name
       cy.get('input[name="username"]').type('Admin');
       //write locators for password and enter my password
        cy.get('input[type="password"]').type('admin123');
        //Locators for clicking on Login button.
        cy.get('button[type="submit"]').click();
        
    });
    it('facebook login', () => {
        cy.visit('https://www.facebook.com/')
        cy.get('#email').type('9830814266');
        cy.get('#pass').type('hellodagh');
        cy.get('button[type="submit"]').click();
        
    });
    it('using xpath test', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        //Xpath for username
        cy.xpath('//input[@id="username"]').type('Anjali');
        //Xpath for password
        cy.xpath('//input[@id="password"]').type('anjali123');
        //Xpath for button.
        cy.xpath('//button[@class="radius"]').click();
        
    });
    //it('using xpath test1', () => {
        //cy.visit('https://www.ebay.com/')

       // cy.xpath('//input[@type="text"]').type('anjali')
        
    //});


});