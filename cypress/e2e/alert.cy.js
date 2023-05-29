describe("handle alert",()=>{

    // 1)  //////////// javascript alert: It will have some text and an 'ok' button ////////
    /// alert window automatically closed by cypress 


    it("javascript alert",()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsAlert()"]').click()
        cy.on('window:alert',(t)=>{
            expect(t).to.contain("I am a JS Alert")
        })
        cy.get('[id="result"]').should('contain','You successfully clicked an alert')
        cy.get('[id="result"]').should('have.text','You successfully clicked an alert')


    })
    
   // 2) javascript confirmation alert
   /// this click automatatic ok button 
    
   it("js confirmation alert",()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsConfirm()"]').click()
        cy.on("window:confirm",(k)=>{
            expect(k).to.contain("I am a JS Confirm")
        })
        cy.get('#result').should('have.text','You clicked: Ok')
    })
    /// click on false button 
    it("js confirmation alert by cancel button",()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsConfirm()"]').click()
        cy.on('window:confirm',(l)=>{
            expect(l).to.contain('I am a JS Confirm')
        })
        cy.on('window:confirm',()=> false)
        cy.get('[id="result"]').should('have.text','You clicked: Cancel')
    })

    /// 3) javascript promt alert : it will have some text with text box for user input along with 'ok'
    /// a) Automatic click on ok button 
    it("js promt alert",()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns("Aviraj")
        })
        cy.get('[onclick="jsPrompt()"]').click()
        cy.get('#result').should('have.text','You entered: Aviraj')
    })

    ///  b) Automatic click on cancel button here not working please find new method 
    it("js prompt click on cancel button",()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns("aviraj")
        })
        cy.get('[onclick="jsPrompt()"]').click()
        // cy.on('window:confirm',()=>false)
        cy.get('[id="result"]').should('have.text','You entered: null')
    })
     



})