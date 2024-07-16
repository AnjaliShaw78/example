//Hooks in Cypress
//before block will be executed 
before(() => {

    cy.fixture('example').then((data)=>{
        globalThis.data=data; //we are initializing the data coming from exmple.json to the data varible
        //

    })
});

    describe('data driven test', () => {
        it('orange hrm login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        
       
       cy.get('input[name="username"]').type(data.username);

        cy.get('input[type="password"]').type(data.password);
        cy.get('button[type="submit"]').click();
        
    
            
        });
    });


    
