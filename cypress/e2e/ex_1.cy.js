

describe('flipcart',()=>{
    beforeEach(()=>{
        cy.visit('https://www.flipkart.com/')
    })

    it("new tastcase",()=>{
      
        cy.url().then((x)=>{
            cy.log(x)
        })
        cy.url().should('contain',"https://www.flipkart.com/").and("eq","https://www.flipkart.com/").and("include",'flipkart')
        cy.title().then((v)=>{
            cy.log(v)
        })
        cy.title().should('contain','Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')
        .and('include','Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')
        cy.get('[type="text"]').type("mobile").type("{enter}")
        cy.get('a[rel="noopener noreferrer"]').eq(2).invoke('removeAttr','target').click()
        // or through cointance method
        // cy.contains("POCO C50 (Royal Blue, 32 GB)").click()
        cy.get('._2U9uOA').eq(0).click()
   
    })
    it('dropdown and scroldown',()=>{
        cy.get('[class="xtXmba"]').eq(2).trigger('mouseover')
        cy.get('[class="_6WOcW9 _2-k99T"]').click()
       
        // cy.get('[alt="Mobiles"]').click()
        // cy.get('[class="_1W9f5C"]').eq(2).scrollIntoView()
        


    })
})