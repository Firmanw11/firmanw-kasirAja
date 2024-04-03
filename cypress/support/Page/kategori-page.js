const locatorKategori = require ('../locator/kategori-locator')
const locatorFitur = require('../locator/fitur-Locator')


class kategoriPage {
 
    async AddKategori() {
        cy.xpath(locatorFitur.datatestid.kategori).click({multiple: true},{force: true})
        cy.wait(2000)
        cy.xpath(locatorKategori.datatestid.klik_Add).click({multiple: true},{force: true})
        cy.xpath(locatorKategori.datatestid.klik_name).type('Kendaraan').should('exist', {timeout: 2000})
        cy.xpath(locatorKategori.datatestid.klik_desc).type('Mobil').should('exist', {timeout: 2000})
        cy.xpath(locatorKategori.datatestid.klik_save).click({multiple: true},{force: true})
        cy.wait(3000)
    }

    async addtanpadeskripsi(){
        cy.xpath(locatorFitur.datatestid.kategori).click({multiple: true},{force: true})
        cy.wait(2000)
        cy.xpath(locatorKategori.datatestid.klik_Add).click({multiple: true},{force: true})
        cy.xpath(locatorKategori.datatestid.klik_name).type('Elektronik').should('exist', {timeout: 1000})
        cy.xpath(locatorKategori.datatestid.klik_save).click({multiple: true},{force: true})
    }

    async ubahkategori(){
        cy.xpath(locatorFitur.datatestid.kategori).click({multiple: true}, {force: true}, {timeout: 3000})
        cy.wait(3000)
        cy.xpath(locatorKategori.datatestid.klik_3dots).click({force: true})
        cy.xpath(locatorKategori.datatestid.ubahkategori).click({multiple: true},{force: true})
        cy.wait(3000)
        cy.xpath(locatorKategori.datatestid.klik_name).type('Handphone').should('exist', {timeout: 2000})
        cy.xpath(locatorKategori.datatestid.klik_desc).type('Iphone').should('exist', {timeout: 2000})

    }

    async deletekategori(){
        cy.xpath(locatorFitur.datatestid.kategori).click({multiple: true},{force: true}, {timeout: 10000})
        cy.wait(3000)
        cy.xpath(locatorKategori.datatestid.klik_3dots).click({force: true})
        cy.xpath(locatorKategori.datatestid.klik_delete).click({multiple: true},{force: true})
        cy.xpath(locatorKategori.datatestid.confirm_delete).click({multiple: true},{force: true})

    }
}
module.exports = new kategoriPage()