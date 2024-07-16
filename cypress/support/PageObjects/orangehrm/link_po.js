class Link_po{
    //method to click on any in the webpage
    //pararmeter is passed,the text in the parameter
    linkclick(link){
        cy.contains(link).click();

    }
}
export default Link_po;