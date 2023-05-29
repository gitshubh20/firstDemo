// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.a is closure in javascriptdd('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

///  <reference types = "cypress" /> 


Cypress.Commands.add("linkname",(label)=>{
    cy.get("a").contains(label).click()
})

// Cypress.Commands.add("login",(email,passord)=>{
//     cy.get('#ap_email').type(email)
//     cy.get('[class="a-button a-button-span12 a-button-primary"]').click()
//     cy.get('[id="ap_password"]').type(passord)
//     cy.get("#signInSubmit").click()
// })


import {salector} from '../support/test'
let asp=new salector
Cypress.Commands.add('loginToForm',(email,password)=>{
    cy.get(asp.id).type(email)
    cy.get(asp.pass).type(password)
    cy.get(asp.SubmitButton).click()
})

Cypress.Commands.add('date',()=>{
    cy.get(asp.DateofBirth1).click()
    cy.get(asp.SelectDate).click()
})

Cypress.Commands.add('nationality',(country)=>{
    cy.get(asp.nationality).type(country)
})

Cypress.Commands.add('MobileNumber',(MobileNumber)=>{
    cy.get(asp.MobileNumber).eq(1).type(MobileNumber)
})



