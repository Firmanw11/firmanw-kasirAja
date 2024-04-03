const locatorPenjualan = require ('../locator/penjualan-locator')
const locatorFitur = require ('../locator/fitur-Locator')

class penjualanPage{

    async tambahPembelian(){
        cy.xpath(locatorFitur.datatestid.penjualan).click({multiple: true},{force: true})
        cy.wait(3000)
        cy.xpath(locatorPenjualan.datatestid.klik_add).click({multiple: true},{force: true})
        cy.xpath(locatorPenjualan.datatestid.klik_product).click({multiple: true},{force: true},{timeout:30000})
        cy.xpath(locatorPenjualan.datatestid.klik_item).click({multiple: true},{force: true})
        cy.xpath(locatorPenjualan.datatestid.klik_qtty).type('10').should('exist', {timeout: 2000})
        cy.xpath(locatorPenjualan.datatestid.klik_save).click({multiple: true},{force: true})
        cy.wait(5000)
    }

    
}

module.exports = new penjualanPage()