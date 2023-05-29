describe('pagenavigation',()=>{
    it('check navigation working or not',()=>{
        cy.visit('https://www.amazon.in/?tag=msndeskabkin-21&ref=pd_sl_5szpgfto9j_e&adgrpid=1320515071595367&hvadid=82532451009254&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=156910&hvtargid=kwd-82533067351416:loc-90&hydadcr=14452_2154372')
        cy.get('[href="/electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics"]').click()
        cy.go(-1)
        cy.wait(4000)
        cy.title().should('eq','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
    })
    it.only('forword',()=>{
        cy.visit('https://www.amazon.in/?tag=msndeskabkin-21&ref=pd_sl_5szpgfto9j_e&adgrpid=1320515071595367&hvadid=82532451009254&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=156910&hvtargid=kwd-82533067351416:loc-90&hydadcr=14452_2154372')
        cy.get('[href="/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles"]').click()
        cy.wait(2000)
        cy.go(-1)
        cy.wait(4000)
        cy.go(1)
        cy.title().should('eq','Mobile Phones: Buy New Mobiles Online at Best Prices in India | Buy Cell Phones Online - Amazon.in')
       // cy.reload()  
    })
})