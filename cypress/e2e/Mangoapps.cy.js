
describe("Mango app test suit",()=>{
    it("Mango app workflow",()=>{
        cy.visit("https://siddasia.mangoapps.com/")
        cy.fixture("mangoapps.json").then((data)=>{
        cy.get('#user_id').type(data.username, {force: true})
        cy.get('#password').type(data.password, {force: true})
        cy.get('.inputDiv >.actionbutton').click({force: true})
        cy.get('.compose-icon1 >.far').should('be.visible').click()
        cy.get(".update_mssg_dialog").should('be.visible').click()
        cy.get(".token-input-list-facebook").should('be.visible').click()
        cy.get("[title='Assignment 1']").should('be.visible').click()
        cy.get("#project_status_update_team").type(data.actstr,{force:true})
        cy.get(".attachLinkonDialog").should('be.visible').click()
        cy.get('#fileupload').attachFile('Aviraj_Resume_Auromaion_test_engineer_python.pdf')
        cy.wait(4000)
        cy.get("#btn_file_upload>span>span").should('be.visible').click()
        cy.wait(3000)
        cy.get('#ms-feed-btn').should('be.visible').click()
        cy.get('#postSuccessMsg').should('be.visible')
        cy.wait(4000)
        cy.get(".non-translated-text").first().should("have.text",data.actstr)
        cy.get(".image-thumb-container").first().should('be.visible')

        })
       
    })
})
