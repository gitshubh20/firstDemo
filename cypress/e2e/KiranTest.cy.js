// import {salector} from '../support/test'
// describe("Testing",()=>{
//     let asp=new salector
//     it("fill form",()=>{
//         cy.visit('https://appform-staging.extraaedge.com/login?inst=18')
//         cy.loginToForm(asp.textid,asp.textpass)
//         cy.wait(4000)
//         cy.get(asp.Title).should('be.visible')
//         cy.get(asp.CampusPreference).click()
//         cy.date()
//         cy.get(asp.BloodGroup).click().first().click()
//         cy.nationality("indian")
//         cy.MobileNumber("9403693659")
//         cy.get(asp.form1).click()
//         cy.get(asp.form2).click()
//         cy.get(asp.form3).click()
//         cy.get(asp.savebutton).click()
//         cy.get(asp.popup).should('be.visible')

//     })
// })


///// mango app test 



describe("mango app test suit",()=>{
    it("mango app workflow",()=>{

        let actstr ="This is my akakakak first assignment in mangoapps BY aviraj kokil"
        cy.visit("https://siddasia.mangoapps.com/")
        //login
        cy.get('#user_id').type('maassignment@yopmail.com', {force: true})
        cy.get('#password').type('temp123', {force: true})
        cy.get('.inputDiv >.actionbutton').click({force: true})

        cy.get('.compose-icon1 >.far').should('be.visible').click()
        cy.get(".update_mssg_dialog").should('be.visible').click()
       
        // alert text box
        cy.get(".token-input-list-facebook").should('be.visible').click()
        cy.get("[title='Assignment 1']").should('be.visible').click()
        
        cy.get("#project_status_update_team").type(actstr,{force:true})
        cy.get(".attachLinkonDialog").should('be.visible').click()
        cy.get('#fileupload').attachFile('Aviraj_Resume_Auromaion_test_engineer_python.pdf')
        cy.wait(4000)
        cy.get("#btn_file_upload>span>span").should('be.visible').click()
        cy.wait(3000)
        //Pdf verification 
        cy.get('#ms-feed-btn').should('be.visible').click()
        cy.get('#postSuccessMsg').should('be.visible')
        
        cy.get('.non-translated-text').each(($ele)=>{
            let expstr=$ele.text()
            if($ele.text()==actstr)
            {
                expect(actstr).to.equal(expstr) 
            }
        })
       
        cy.get(".image-thumb-container").first().should('be.visible')
                
        
    })
})
