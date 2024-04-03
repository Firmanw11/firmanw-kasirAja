const locatorPelanggan = require ('../locator/pelanggan-locator')
const locatorFitur = require('../locator/fitur-Locator')

class pelangganPage {
    // addPelanggan
    async addPelanggan (){
        cy.xpath(locatorFitur.datatestid.pelanggan).click({multiple: true},{force: true})
        cy.wait(2000)
        cy.xpath(locatorPelanggan.datatestid.klik_add).click({multiple: true},{force: true})
        cy.xpath(locatorPelanggan.datatestid.klik_nama).type('firman').should('exist', {timeout: 2000})
        cy.xpath(locatorPelanggan.datatestid.klik_noHP).type('08031').should('exist', {timeout: 2000})
        cy.xpath(locatorPelanggan.datatestid.klik_alamat).type('Jln.12314').should('exist', {timeout: 2000})
        cy.xpath(locatorPelanggan.datatestid.klik_ket).type('Pelanggan').should('exist', {timeout: 2000})
        cy.xpath(locatorPelanggan.datatestid.klik_save).click({multiple: true},{force: true})
        cy.wait(3000)
    }

    async ubahPelanggan(){
        cy.xpath(locatorFitur.datatestid.pelanggan).click({multiple: true},{force: true})
        cy.wait(2000)
        cy.xpath(locatorPelanggan.datatestid.klik_3dots).click({multiple: true},{force: true})
        cy.xpath(locatorPelanggan.datatestid.klik_3dotsUbah).click({multiple: true},{force: true})
        cy.wait(2000)
        cy.xpath(locatorPelanggan.datatestid.klik_nama).type('firman').should('exist', {timeout: 2000})
        cy.xpath(locatorPelanggan.datatestid.klik_noHP).type('08031').should('exist', {timeout: 2000})
        cy.xpath(locatorPelanggan.datatestid.klik_alamat).type('Jln.12314').should('exist', {timeout: 2000})
        cy.xpath(locatorPelanggan.datatestid.klik_ket).type('Pelanggan').should('exist', {timeout: 2000})
        cy.xpath(locatorPelanggan.datatestid.klik_save).click({multiple: true},{force: true})
        cy.wait(3000)

    }

    async hapusPelanggan(){
    cy.xpath(locatorFitur.datatestid.pelanggan).click({multiple: true},{force: true})
    cy.wait(2000)
    cy.xpath(locatorPelanggan.datatestid.klik_3dots).click({multiple: true},{force: true})
    cy.xpath(locatorPelanggan.datatestid.klik_3dotsHapus).click({multiple: true},{force: true})
    cy.wait(2000)
    cy.xpath(locatorPelanggan.datatestid.confirm_delete).click({multiple: true},{force: true})

    }

    async cariPelanggan(){

    }

}

module.exports = new pelangganPage()