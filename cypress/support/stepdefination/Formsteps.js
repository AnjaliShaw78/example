import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"

Given('user opens the simple form url',()=>{
     cy.visit('https://v1.training-support.net/selenium/simple-form')
})
When('user enters firstname,lastname,email,message',()=>{
    cy.get('#firstName').type('Anjali')
    cy.get('#lastName').type('Shaw')
    cy.get('#email').type('shawanjali0708@gmail.com')
    cy.get('#number').type('9830814266')
    cy.xpath('//textarea').type('Hello')
})

And('clicks on submit',()=>{
    cy.xpath('//input[@type="submit"]').click();

})
Then('An alert saying successful message has to be displayed.',()=>{
    cy.on('window:confirm',(alertmessage)=>{
        expect(alertmessage).to.equal('Thank You for reaching out to us, Anjali Shaw')
        return true;
    })
})