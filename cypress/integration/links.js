/// <reference types="cypress" />

describe('Example to demonstrate the use each in Cypress', function () {
   
    it('test', function () {
        cy.visit('http://webdriveruniversity.com/Popup-Alerts/index.html');
        cy.get('#button1').click();
        cy.on('window:alert', (str) => {
            expect(str).to.eql('I am an alert box!')
        })
    })

})