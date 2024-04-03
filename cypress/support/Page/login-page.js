const locator = require('../locator/login-locator')

class loginPage {

    async urlLogin(){
        cy.visit('https://kasirdemo.belajarqa.com/')
    }

    async fillEmail(){
        cy.xpath(locator.datatestid.email_input).clear().type('firmacill@gmail.com', {force: true}) 
    }

    async fillPassword(){
        cy.xpath(locator.datatestid.password_input).clear().type('Qwerty123!',{force: true})
    }

    async clickLoginButton(){
        cy.xpath(locator.datatestid.login_button).click({force: true})
        cy.wait(2000)
    
    }
}
module.exports = new loginPage