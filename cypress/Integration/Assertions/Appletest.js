describe('Apple test', () => {
    it('test1', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //Assert username using expect and then
        cy.get('[name="username"]').then(($username)=>{
            //expect is a method used for assertions
            expect($username).to.have.attr('placeholder','Username')

            //directly if we try to clock on username
            //it will not work-Jquery
            //To convert jquery variable to cypress object we have to wrap
            cy.wrap($username).type('Admin')

        }); //this is where 
        cy.get('[name="password"]').then(($password)=>{
            expect($password).to.have.attr('placeholder','Password')

            cy.wrap($password).type('admin123')
        });
        cy.get('[type="submit"]').then(($login)=>{
            expect($login).to.have.attr('type','submit')
            cy.wrap($login).click();
        
        });
        //logout
        //
        cy.wait(2000);
        cy.get('.oxd-userdropdown-name').click();

        cy.get('.oxd-dropdown-menu').find('.oxd-userdropdown-link').each(($dropdown_element)=>{

            //looping will start
            if($dropdown_element.text()=='Logout'){
                cy.wrap($dropdown_element).click();
            }
        })
        
    });
});