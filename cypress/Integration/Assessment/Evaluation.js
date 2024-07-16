describe('Evaluation', () => {
    it('test1', () => {
        cy.visit('https://automationteststore.com/');
        //click on "Apparel&Accesoories" and select "T-shirts".
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').click();
        //click on the third white T-shirt.
        cy.xpath('(//a[@href="https://automationteststore.com/index.php?rt=product/category&path=68_70"])[3]').click();
        //select the T -shirt.
        cy.xpath('(//img[@src="//automationteststore.com/image/thumbnails/18/79/t_shirt_3_jpg-100243-250x250.jpg"])[1]').click();
        //change the colour of the T-shirt.
        cy.wait(2000);
        cy.xpath('//img[@src="//automationteststore.com/image/thumbnails/18/79/t_shirt_3a_jpg-100244-45x45.jpg"]').click();
        //select the quantity
        cy.xpath('//input[@id="product_quantity"]').type('0');
        // add to cart
        cy.xpath('(//a[@href="#"])[1]').click();
        //click the checkout.
        cy.xpath('//a[@id="cart_checkout1"]').click();
        //select the guest checkout.
        cy.xpath('//label[@for="accountFrm_accountguest"]').click();
        //click on continue button.
        cy.xpath('(//button[@type="submit"])[1]').click();
        cy.get('input[name="firstname"]').type('Anjali');
        cy.get('input[name="lastname"]').type('Shaw');
        cy.xpath('//input[@id="guestFrm_email"]').type('shawanjali0708@gmail.com');
        cy.xpath('//input[@id="guestFrm_address_1"]').type('adshf');
        cy.xpath('//input[@id="guestFrm_city"]').type('fadss');
        cy.xpath('//select[@name="zone_id"]').select('Aberdeenshire');
        cy.xpath('//input[@name="postcode"]').type('343265');
        cy.xpath('//select[@name="country_id"]').select('United Kingdom');
        //select the checkbox.
        cy.xpath('//label[@for="guestFrm_shipping_indicator"]').click();
        //cy.get('').click();
       // cy.get('').click();
        ////cy.xpath('').click();
        //cy.xpath('').click();
        //cy.xpath('').click();
        //cy.xpath('').click();
        //cy.xpath('').click();
        

        //select the continue button
        cy.xpath('(//button[@type="submit"])[1]').click();
        //Assert the success message
        cy.get('div.contentpanel').should('contain.text','Your order has been successfully processed!')



        
    });
});