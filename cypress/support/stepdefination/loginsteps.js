import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"
Given('open the browser and enter url',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

})
When('enter username as {word}',(username)=>{
    cy.get('input[name="username"]').type(username)
})
And('enter password as {word}',(password)=>{
    cy.get('input[name="password"]').type(password)
})