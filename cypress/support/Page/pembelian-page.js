const locatorPembelian = require ('../locator/pembelian-locator')
const locatorFitur = require ('../locator/fitur-Locator')

class pembelianPage{

    async tambahPembelian(){
        cy.xpath(locatorFitur.datatestid.pembelian).click({multiple: true},{force: true})
        cy.wait(3000)
        cy.xpath(locatorPembelian.datatestid.klik_add).click({multiple: true},{force: true})
        cy.xpath(locatorPembelian.datatestid.klik_product).click({multiple: true},{force: true},{timeout:30000})
        cy.xpath(locatorPembelian.datatestid.klik_item).click({multiple: true},{force: true})
        cy.xpath(locatorPembelian.datatestid.klik_qtty).type('10').should('exist', {timeout: 2000})
        cy.xpath(locatorPembelian.datatestid.klik_save).click({multiple: true},{force: true})
        cy.wait(5000)
    }

    
}

module.exports = new pembelianPage()