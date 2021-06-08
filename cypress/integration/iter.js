/// <reference types="cypress" />

describe("iteration", () => {

    it("makeup", () => {
        cy.visit("http://automationteststore.com/")

        cy.get("a[href*='product/category&path']").contains("Makeup").click()

        cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text()
            cy.log(headerText + " is here")
            expect(headerText).is.eq('Makeup')
        });

    });

    it.only("makeup", () => {


    });
    
})