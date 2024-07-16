describe('Test Suite - Heroku Test suite', () => {
    //Describe is a block, where you will write multiple test
    //Describe and it block are from Mocha Libray.
    //This is how we write test in Cypress
    //This file is also called as Spec.

    it('Test1', () => {
        //it block is your test script -1 Test
        //cy is my cypress object
        //using cy i can write my cypress commands
        //cy.visit is used to enter the URL inside the browser.
        cy.visit('https://the-internet.herokuapp.com/login')
    });
});