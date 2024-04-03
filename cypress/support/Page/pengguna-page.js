const locatorPengguna = require('../locator/pengguna-locator')
const locatorFitur = require('../locator/fitur-Locator')

class penggunaPage {

    async addPengguna(){
        cy.xpath(locatorFitur.datatestid.pengguna).click({multiple: true},{force: true})
        cy.wait(2000)
        cy.xpath(locatorPengguna.datatestid.klik_add).click({multiple: true},{force: true})
        cy.xpath(locatorPengguna.datatestid.klik_name).type('namrif').should('exist', {timeout: 2000})
        cy.xpath(locatorPengguna.datatestid.klik_email).type('namrifical@gmail.com').should('exist', {timeout: 2000})
        cy.xpath(locatorPengguna.datatestid.klik_password).type('Qwerty1234!').should('exist', {timeout: 2000})
        cy.xpath(locatorPengguna.datatestid.klik_simpan).click({multiple: true},{force: true})
        cy.wait(3000)
        
    }

    async ubahPengguna(){
        cy.xpath(locatorFitur.datatestid.pengguna).click({multiple: true},{force: true})
        cy.wait(2000)
        cy.xpath(locatorPengguna.datatestid.klik_3dots).click({multiple: true},{force: true})
        cy.xpath(locatorPengguna.datatestid.klik_3dotsUbah).click({multiple: true},{force: true})
        cy.xpath(locatorPengguna.datatestid.klik_add).click({multiple: true},{force: true})
        cy.xpath(locatorPengguna.datatestid.klik_name).type('namrif').should('exist', {timeout: 2000})
        cy.xpath(locatorPengguna.datatestid.klik_email).type('namrifical@gmail.com').should('exist', {timeout: 2000})
        cy.xpath(locatorPengguna.datatestid.klik_password).type('Qwerty1234!').should('exist', {timeout: 2000})
        cy.xpath(locatorPengguna.datatestid.klik_simpan).click({multiple: true},{force: true})
        cy.wait(3000)
        
    }

    async hapusPengguna(){
        cy.xpath(locatorFitur.datatestid.pengguna).click({multiple: true},{force: true})
        cy.wait(2000)
        cy.xpath(locatorPengguna.datatestid.klik_3dots).click({multiple: true},{force: true})
        cy.xpath(locatorPengguna.datatestid.klik_3dotsHapus).click({multiple: true},{force: true})
        cy.wait(2000)
        cy.xpath(locatorPengguna.datatestid.confirm_delete).click({multiple: true},{force: true})
        
    }
}

module.exports = new penggunaPage ()