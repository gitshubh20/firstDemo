describe("check drop down",()=>{
    it.skip('dropdown',()=>{
        // STATIC DROPDOWN
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get('.custom-select').select('Italy').should('contain','Italy')

    })

    it.skip('dynamic dropdown',()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.get('[type="search"]').type("india")
        cy.get('.suggestion-title').contains('n Premier League').click()
    })

    it('Auto_suggested dropdown',()=>{
        cy.visit('https://www.google.com/')
        cy.get('[type="text"]').type('cypress automation')
        
        // cy.get('[class="wM6W7d"]').contains('tutorial').click()
        //  OR
        cy.get('div.wM6W7d>span').each(($ele,index,$list) =>{
            if($ele.text()=='cypress automation tool')
            {
                cy.wrap($ele).click()
            }
        })
    })

    it.only("amazon",()=>{
        cy.visit("https://www.amazon.in/?&ext_vrnc=hi&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=58355126069&hvpone=&hvptwo=&hvadid=486458706470&hvpos=&hvnetw=g&hvrand=4596227618083494025&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061998&hvtargid=kwd-10573980&hydadcr=14453_2154373")
        cy.get('[id="nav-xshop"]>a').each(($data,index,list)=>{
            let rr=$data.text()
            cy.wrap($data).click().should('include',rr)
        })
        
    })
})