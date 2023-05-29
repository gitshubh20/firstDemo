describe('new window functionality check',()=>{
    it('new tab verification',()=>{
        cy.visit('https://www.flipkart.com/mobile-phones-store?fm=neo%2Fmerchandising&iid=M_3a78bdc5-16e7-4fa5-bd25-9a85bbc1d81c_1_372UD5BXDFYS_MC.ZRQ4DKH28K8J&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Mobiles_ZRQ4DKH28K8J&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L0_view-all&cid=ZRQ4DKH28K8J')
        cy.get('div[class="_1kLt05"]>a').eq('0').invoke('removeAttr','target').click()
        cy.url().should('include','apple-iphone-14-plus-starlight')
        
    })
    it('without invoke function',()=>{
        cy.visit('https://www.flipkart.com/mobile-phones-store?fm=neo%2Fmerchandising&iid=M_3a78bdc5-16e7-4fa5-bd25-9a85bbc1d81c_1_372UD5BXDFYS_MC.ZRQ4DKH28K8J&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Mobiles_ZRQ4DKH28K8J&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L0_view-all&cid=ZRQ4DKH28K8J')
        cy.get('div[class="_1kLt05"]>a').then((e)=>{
           let url= e.prop('href')
           cy.visit(url)
        })
        cy.url().should('include','apple-iphone-14-plus-starlight')
    })
})