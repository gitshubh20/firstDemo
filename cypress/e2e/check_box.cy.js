describe('checkbox',()=>{
    it('check_box validation',()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.url().should('contain','azurewebsites')
        
        //mark female radio button 
        cy.get('#female').should('be.visible')
        cy.get('#female').check().should('be.checked')

        // check male is not marked 
        cy.get('#male').should('not.be.checked')
        cy.get('#male').should('be.visible')

        // select on box 
        cy.get('#monday').check().should('be.checked')

        // select multiple box
        cy.get('input.form-check-input[type="checkbox"]').check().should('be.checked')
        cy.get('input.form-check-input[type="checkbox"]').uncheck().should('not.be.checked')

        




    })
})