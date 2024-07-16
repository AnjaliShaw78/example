///<reference types="cypress-Xpath"/>

describe('drag and drop', () => {
    it('test', () => {
        cy.visit('https://v1.training-support.net/selenium/drag-drop');

        cy.get('#draggable').trigger('mousedown',{which:1});
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{froce:true})
        
    });
    it('', () => {
        cy.visit('https://v1.training-support.net/selenium/drag-drop');

        cy.get('#draggable').trigger('mousedown',{which:1});
        cy.get('#dropzone2').trigger('mousemove').trigger('mouseup',{froce:true})
        
        
    });
});