
// first we need install package in our system
/// npm install --save-dev cypress-file-upload

/// OR 

/// You need to Install cypress-file-upload dev dependency first:

// npm i cypress-file-upload --save-dev
// Then import it in cypress/support/e2e.js
// import 'cypress-file-upload'

describe('file upload',()=>{
    it('upload the file',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('[id="file-upload"]').attachFile('Aviraj_Kokil_Automation_Testing___Cypress.pdf')
        cy.get('[class="button"]').click()
        cy.wait(3000)
        cy.get('[class="example"]>h3').should('have.text','File Uploaded!')
    })
   
    it('rename file while uploading',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('[id="file-upload"]').attachFile({filePath:'Aviraj_Kokil_Automation_Testing___Cypress.pdf',fileName:'aviraj_kokil'})
        cy.get('[class="button"]').click()
        cy.wait(3000)
        cy.get('[class="example"]>h3').should('have.text','File Uploaded!')

    })
    it('file upload drag and drop ',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('[id="drag-drop-upload"]').attachFile('Aviraj_Kokil_Automation_Testing___Cypress.pdf',{subjectType:'drag-n-drop'})
        cy.wait(4000)
        cy.get('[class="dz-preview dz-file-preview dz-processing dz-success dz-complete"]>div>div').should('have.text','Aviraj_Kokil_Automation_Testing___Cypress.pdf')

    })
    it.only('muliple file upload',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('[type="file"]').attachFile(['Aviraj_Kokil_Automation_Testing___Cypress.pdf','Aviraj_Kokil_Automation_Testing___Cypress.pdf'])
        cy.get('#fileList > :nth-child(1)').should('have.text','Aviraj_Kokil_Automation_Testing___Cypress.pdf')
        cy.get('#fileList > :nth-child(2)').should('have.text','Aviraj_Kokil_Automation_Testing___Cypress.pdf')

    })

    /// Here url is not present so only demo parameter attached
    it('uploadfile under shadowdom',()=>{
        cy.visit("url")
        cy.get('#id',{includeShadowDom:true}).attachFile('filename')
        cy.wait(3000)
        cy.get('.class',{includeShadowDom:true}).contains('filename')
    })
})