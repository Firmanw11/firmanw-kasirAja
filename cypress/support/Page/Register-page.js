const locator = require('../locator/register-locator')

class registerPage {

    async urlRegister(){
        cy.visit('https://kasirdemo.belajarqa.com/').should('exist', {timeout: 7000})
        cy.xpath(locator.datatestid.button_regist).click()
    }

    async fillNamaToko(){
        cy.xpath(locator.datatestid.nameToko_input).clear().type('tokoFirman', {force: true})
    }

    async fillEmail(){
        cy.xpath(locator.datatestid.email_input).clear().type('firmacill@gmail.com', {force: true}) 
    }

    async fillPassword(){
        cy.xpath(locator.datatestid.password_input).clear().type('Qwerty123!',{force: true})
    }

    async clickSignUpBtn() {
        cy.xpath(locator.datatestid.signup_button).click({ multiple : true },{ force: true })
        
        cy.wait(3000)
    }

}
module.exports = new registerPage