

// describe("practice all method",()=>{
//     beforeEach("visit url",()=>{
//         cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//         cy.title().should("eq","Practice Page")


//     })


//     it("test all method functions",()=>{
        

//         ///// Radio button select
//         cy.log("=========== radio button=========")
//         cy.get('[value="radio1"]').check().should("be.checked")
//         cy.get('[value="radio2"]').should("not.be.checked")
//         cy.get('[value="radio2"]').should('be.visible')
//         cy.get('[value="radio3"]').should('be.visible').and('not.be.checked')


//         cy.log("========checkbox==============")

//         cy.get('#checkBoxOption1').check().should("be.checked").and("be.visible")
//         cy.get("#checkBoxOption2").should('not.be.checked').should('be.visible')

//         cy.log("=====select muliple checkbox========")
//         // cy.get('[type="checkbox"]').check().should("be.checked")
//         // cy.get("#checkBoxOption2").uncheck().should("not.be.checked")
//         // or
//         cy.get('[type="checkbox"]').check(['option1','option3']).should("be.checked").should('have.value','option1','option3')


//     })
//     it("static drop down",()=>{
//         // cy.get('#dropdown-class-example').select("Option2")

//         ///// print drop down list
//         cy.get('[id="dropdown-class-example"]>option').each((v)=>{
//             cy.log(v.text())
            
//         })
//     })
//     it("dynamic drop down",()=>{
//         cy.get('[id="autocomplete"]').type('ab')
//         cy.get('[class="ui-menu-item"]').each((value,index,menu)=>{
//             cy.log(value.text())
//             if(value.text()=='Saudi Arabia'){
//             cy.wrap(value).click()
//             }
            
//         })
//     })
//     it("switch tab test case",()=>{
//         cy.get('#opentab').invoke("removeAttr",'target').click()
//         cy.wait(4000)

//         /// this side is not working so code is not executed
//        // cy.title().should('include','QAClick Academy - A Testing Academy to Learn, Earn and Shine')
//     //    cy.get('.float-left').eq(0).should('have.text','info@qaclickacademy.com')

        
//     })
//     it.only("table travel",()=>{
//         cy.get("tr td:nth-child(2)").each((ele,index)=>{
//             let hh=ele.text()
//             if(hh.includes('JMETER')){
//                 cy.log('index is '+index,'value are ' +hh)
//             }
//         })
//         cy.get('tr td:nth-child(2)').each((ele,index)=>{
//             const kk=ele.text()
//             if(kk.includes('REST API Testing')){
//                 cy.get('tr td:nth-child(2)').eq(index).next().then((value)=>{
//                     cy.log(value.text())
//                 })
                
//             }
//         })
//         let sum=0
//         cy.get('.tableFixHead>table>tbody>tr>td:nth-child(4)').each((value,index)=>{
//             sum=sum+Number(value.text())
            
//         }).then(()=>{
//             cy.log(sum)
//             cy.get(".totalAmount").then((kl)=>{
//                 let tt=kl.text().split(":")[1]
//                 cy.log(tt)
//                 expect(Number(tt)).to.eq(sum)
//             })
//         })
        
        
//     })

  
// })  


// /// TABLE TRAVELING 

// describe("cricket score",()=>{
//     it("validate cricket score",()=>{
//         cy.visit("https://www.google.com/search?q=cricket+score&oq=cricket+score&aqs=chrome..69i57j0i131i433i512l2j0i433i512j0i131i433i512j0i433i512j46i433i512j0i131i433i512l2j0i512.7472j1j15&sourceid=chrome&ie=UTF-8#sie=m;/g/11sjgqdbvx;5;/m/03b_lm1;cms;fp;1;;;")
//         let sum=0
//         cy.get('.imspo_tps__pss').eq(2).find('.imspo_tps__tb>tbody>tr.imspo_tps__psrow>td:nth-child(2)').each((element,index)=>{
//             sum=sum+Number(element.text())

//         }).then(()=>{
//             cy.log(sum)
//             cy.get('.imspo_tps__sum-row>td:nth-child(2)').eq(2).then((extra)=>{
//                 let extraRun=extra.text()
//                 cy.log(extraRun)
                
//                 let total= Number(sum)+Number(extraRun)
//                 cy.log(total)

//                 cy.get('.imspo_tps__sum-row>td:nth-child(2)').eq(3).then((avi)=>{
//                     cy.log(avi.text())
//                    expect(total).to.eq(Number(avi.text()))
//                 })
               
//             })
//         })
    
//     })
// })


// //////  IFRAME 

// describe("iframe",()=>{
//     it("travel iframe",()=>{
//         cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//         cy.get("#courses-iframe").then((iframedata)=>{
//             let data=iframedata.contents().find('body')
//             cy.wrap(data).as('iframe')

//         })
//         cy.get("@iframe").find('a[href="https://rahulshettyacademy.com/blog/"]').eq(0).click()

//     })
//     it("iframe second example ",()=>{
//         cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//         cy.get('#courses-iframe').then((idatas)=>{
//             let imodel=idatas.contents().find('body')
//             cy.wrap(imodel).as("iframemodel")
//         })
//         cy.get("@iframemodel").find('[href="https://courses.rahulshettyacademy.com/courses"]').eq(0).click()


//     })
//     ///////////  ALERT   ////////////

//     it("js confirmation alert by cancel button",()=>{
//         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
//         cy.get('[onclick="jsConfirm()"]').click()
//         cy.on('window:confirm',(l)=>{
//             expect(l).to.contain('I am a JS Confirm')
//             return false     /// here true means clicking ok button and false means cancel button
//         })
        
//         cy.get('[id="result"]').should('have.text','You clicked: Cancel')
//     })
//     it.only("js promt alert",()=>{
//         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
//         cy.window().then((win)=>{
//             cy.stub(win,'prompt').returns("Aviraj")
            
//         })
//         cy.get('[onclick="jsPrompt()"]').click()
//         cy.on('window:confirm',()=>false)
//         // cy.get('#result').should('have.text','You entered: Aviraj')
//     })
// })

describe("search word",()=>{
    it("testcase for search word ",()=>{
        cy.visit("https://www.google.com/")
        cy.get("#APjFqb").type("chennail super king ").type('{enter}')
        
    })
})



//// Interview question asked in mirafra

// Cypress.Command.add("login",(username,password)=>{
//     cy.get(".class").type(username)
//     cy.get(".class").type(password)
//     cy.get(".button").click()
// })
// cy.on("uncought",()=>{
//     cy.get(".class").click()
// })

// describe("testcase scenario",()=>{
//     it("testcase",()=>{
//         cy.get(".class").class()
//     })
// })

// cy.request("url").then((data)=>{
//     expect(data.status).to.eq("abc")
    
// })
