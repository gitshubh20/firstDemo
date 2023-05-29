



describe("table hndle",()=>{
    beforeEach("login",()=>{
        cy.visit('https://demo.opencart.com/admin/')
        cy.get('[id="input-username"]').type("demo")
        cy.get('[id="input-password"]').type('demo')
        cy.get('[type="submit"]').click()
        cy.get('[class="btn-close"]').click()
    })
    it("check no of row and colom",()=>{
        cy.get('[id="menu-customer"]').click()
        cy.get('#menu-customer>ul>li:first-child').click()
        cy.get('[class="table table-bordered table-hover"]>tbody>tr').should('have.length','10')
        cy.get('[class="table table-bordered table-hover"]>thead>tr>td').should('have.length','7')
 
    })
    it("read the data from table",()=>{
        cy.get('[id="menu-customer"]').click()
        cy.get('#menu-customer>ul>li:first-child').click()
        cy.get('[class="table table-bordered table-hover"]>tbody>tr:nth-child(3)>td:nth-child(3)').contains('gorankreziccc90@gmail.com')


    })
    it.only('read each colom data',()=>{
        cy.get('[id="menu-customer"]').click()
        cy.get('#menu-customer>ul>li:first-child').click()
        cy.get('[class="table table-bordered table-hover"]>tbody>tr')
        .each(($row,index,$nrows)=>{
            cy.wrap($row).within(()=>{
                cy.get('td').each(($col,index,$ncol)=>{
                cy.log($col.text())
                cy.log(`indexvalue is `,index)    
                cy.log($ncol)
                })
            })
        })

    })
    it.only('page navigtion ',()=>{
        let totalPage;
        cy.get('[id="menu-customer"]').click()
        cy.get('#menu-customer>ul>li:first-child').click()
        cy.get('.col-sm-6.text-end').then((c)=>{
            let mytext=c.text()
            totalPage=mytext.substring(mytext.indexOf("(")+1,mytext.indexOf('Pages')-1)
            cy.log("Total number of pages in table ======>"+totalPage);
        
        
        })

        let noOfpage=5
        for (let p=1;p<=noOfpage;p++){
            if(noOfpage>1){
                cy.log("active page is ===="+p)
                cy.get('ul[class="pagination"]>li:nth-child('+p+')').click()
                cy.wait(3000)
                cy.get('[class="table table-bordered table-hover"]>tbody>tr')
                .each(($row,index,$rows)=>{
                cy.wrap($row).within(()=>{
                    cy.get('td:nth-child(3)').then((r)=>{
                        cy.log(r.text)
                    })
                })
                })


            }
        }
      
    })

})