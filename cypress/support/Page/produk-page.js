const locatorProduk = require('../locator/produk-locator')
const locatorFitur = require('../locator/fitur-Locator')

class produkPage{

    // addProduk
    async addProduk(){
        cy.xpath(locatorFitur.datatestid.produk).click({multiple: true},{force: true})
        cy.wait(2000)
        cy.xpath(locatorProduk.datatestid.klik_add).click({multiple: true},{force: true})
        cy.xpath(locatorProduk.datatestid.klik_nama).type('Kartu UNO').should('exist', {timeout: 2000})
        cy.xpath(locatorProduk.datatestid.klik_des).type('Permainan').should('exist', {timeout: 2000})
        cy.xpath(locatorProduk.datatestid.klik_hargaBeli).type('18000').should('exist', {timeout: 2000})
        cy.xpath(locatorProduk.datatestid.klik_hargaJual).type('25000').should('exist', {timeout: 2000})
        cy.xpath(locatorProduk.datatestid.klik_stok).type('10').should('exist', {timeout: 2000})
        cy.xpath(locatorProduk.datatestid.klik_kategoriProduk).click({multiple: true}).should('exist', {timeout: 2000})
        cy.xpath(locatorProduk.datatestid.klik_kategori1).click({multiple: true}).should('exist', {timeout: 2000})
        cy.xpath(locatorProduk.datatestid.klik_save).click({multiple: true},{force: true})
        cy.wait(3000)

    }
    // ubahProduk
    async ubahProduk(){
        cy.xpath(locatorFitur.datatestid.produk).click({multiple: true},{force: true})
        cy.wait(2000)
        cy.xpath(locatorFitur.datatestid.klik_3dotsItem).click({multiple: true},{force: true})
        cy.xpath(locatorFitur.datatestid.klik_3dotsUbah).click({multiple: true},{force: true})
        cy.xpath(locatorProduk.datatestid.klik_add).click({multiple: true},{force: true})
        cy.xpath(locatorProduk.datatestid.klik_nama).type('Kartu UNO').should('exist', {timeout: 2000})
        cy.xpath(locatorProduk.datatestid.klik_des).type('Permainan').should('exist', {timeout: 2000})
        cy.xpath(locatorProduk.datatestid.klik_hargaBeli).type('18000').should('exist', {timeout: 2000})
        cy.xpath(locatorProduk.datatestid.klik_hargaJual).type('25000').should('exist', {timeout: 2000})
        cy.xpath(locatorProduk.datatestid.klik_stok).type('10').should('exist', {timeout: 2000})
        cy.xpath(locatorProduk.datatestid.klik_kategoriProduk).click({multiple: true}).should('exist', {timeout: 2000})
        cy.xpath(locatorProduk.datatestid.klik_kategori1).click({multiple: true}).should('exist', {timeout: 2000})
        cy.xpath(locatorProduk.datatestid.klik_save).click({multiple: true},{force: true})
        cy.wait(3000)

        

    }
    
    async hapusProduk(){
        cy.xpath(locatorFitur.datatestid.produk).click({multiple: true},{force: true})
        cy.wait(2000)
        cy.xpath(locatorProduk.datatestid.klik_3dots).click({multiple: true},{force: true})
        cy.xpath(locatorProduk.datatestid.klik_3dotsHapus).click({multiple: true},{force: true})
        cy.wait(2000)
        cy.xpath(locatorProduk.datatestid.klik_confrm_delet).click({multiple: true},{force: true})
    }

    async cariProduk(){

    }

    async cariProdukKategori(){

    }
}
module.exports = new produkPage()
