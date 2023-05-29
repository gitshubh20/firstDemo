





describe("practice",()=>{
    it("practice",()=>{
        cy.visit('https://www.flipkart.com/')
        let urlPage=cy.url()
        cy.log(urlPage)
        cy.url().should("eq","https://www.flipkart.com/")
        if (urlPage="https://www.flipkart.com/"){
            cy.log("assertion correct")
            cy.log(cy.url().should("eq",urlPage))
        }
        let titlePage=cy.title()
        cy.log(titlePage)
        cy.title().should("contain","Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!")
        cy.get("._3704LK").type("sandel")
        cy.get('.L0Z3Pu').click()
        cy.url().should("include","sandel")
        cy.get("._3879cV").each(($ro,index,rows)=>{
           let textValue= $ro.text()
           if(textValue=="ADIDAS"){
               cy.wrap($ro).click()
               cy.url().should("include","DADIDAS")
           }
       })
       cy.wait(3000)
       cy.get('[data-id="SNDGG4AVV64UYHCD"]>div>a').invoke("removeAttr","target").click()   
       cy.go(-1)
   
   
    })
    it("check file upload",()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get("#file-upload").attachFile("Aviraj_Resume_Auromaion_test_engineer_python.pdf")
        cy.get('.button').click()  
        cy.get('[class="example"]>h3').should("have.text","File Uploaded!")
    })
    it("rename of file upload",()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('[id="file-upload"]').attachFile({filePath:"Aviraj_Resume_Auromaion_test_engineer_python.pdf",fileName:"resume"})
        cy.get('[class="button"]').click()
        cy.wait(4000)
        cy.get('[class="example"]>h3').should('have.text','File Uploaded!')
    })

    it("javascript alert ",()=>{
        //// automaticle click on ok button 
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get('[onclick="jsAlert()"]').click()
        cy.on("window:alert",(t)=>{
            expect(t).to.contain("I am a JS Alert")
        })
        cy.get("#result").should("have.text","You successfully clicked an alert")

    })
    it("conformation alert",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get('[onclick="jsConfirm()"]').click()
        cy.on('window:confirm',(p)=>{
            expect(p).to.contain("I am a JS Confirm")
        })
    
    })
    it("cricket score",()=>{
      
        cy.visit("https://sports.ndtv.com/ipl-2023/points-table")
        cy.get('[class="Ptb2Tb_tbdy"]>tr>td>a:first-child').each(($li) => cy.log($li.text()))
    })
    it("custome command",()=>{
        cy.visit("https://demo.nopcommerce.com/")
        cy.linkname('Apple MacBook Pro 13-inch')

    })
    it.only("login",()=>{
        cy.visit("https://www.amazon.in/amazonprime?ref_=Hero_FT_desktop&pf_rd_r=Z4DF7W2K85SCVN9A4HF8&pf_rd_p=dd259dea-9a1d-4114-817f-1d0d8b3fff47&pd_rd_r=64e7878d-b737-4a89-9b2c-129d6deac792&pd_rd_w=bQnfN&pd_rd_wg=Yxc5e")
        cy.get("#nav-link-accountList-nav-line-1").click()
        cy.login("aviraj.kokil@gmail.com","Jayhind@123")
        // here require to manual opt then next operation is done but our motive to create custome command 
        // is done here creaed custome command 

    })



})