describe('test case heading', () => {
    // it('test case name', () => {

    //     // IMPLICIT ASSERTION

    //     // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //     // cy.url().should('contain','login').should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //     // .should('contain','orangehrmlive')

    //     //OR

    //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //     cy.url().should('contain','login').and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //     .and('contain','orangehrmlive')
        
    //      cy.title().should('include','OrangeHRM')
    //      cy.get('[src="/web/images/ohrm_branding.png?1672659722816"]').should('be.visible')
    //      cy.get('[src="/web/images/ohrm_branding.png?1672659722816"]').should('exist')


    //      cy.get('[name="username"]').type("admin")
    //      cy.get('[name="username"]').should('have.value','admin')




    // }) 
    
    it("explicit", ()=>{

        // Explicit assertion 
         
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('[name="username"]').type('admin')
        cy.get('[type="password"]').type('admin123')
        cy.get('.oxd-button--medium').click()
        
        
        let expname="Harsha Vardhini"

        cy.get('.oxd-userdropdown-name').then((x)=>{
            
            let actname=x.text()

            expect(actname).to.equal(expname)  // BDD
            
            assert.equal(expname,actname) // TDD 
 
        })
    })
})