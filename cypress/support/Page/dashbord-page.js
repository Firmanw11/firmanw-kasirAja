const locatorDashboard = require ('../locator/dasboard-locator')
const locatorFitur = require('../locator/fitur-Locator')


class dasboardPage {

    async urlHome(){
        cy.visit('https://kasirdemo.belajarqa.com/dashboard')
    }

    async klikPenjualan(){
        cy.xpath(locatorFitur.datatestid.kategori).click({force: true}).should('exist',{timeout: 2000})
        cy.wait(2000)
    }
    

    async klikPembelian(){
        cy.xpath(locatorFitur.datatestid.pembelian).click({force: true}).should('exist',{timeout: 2000})
        cy.wait(2000)
    }

    async klikKategori(){
        cy.xpath(locatorFitur.datatestid.kategori).click({force: true}).should('exist',{timeout: 2000})
        cy.wait(2000)
    }

    async klikProduk(){
        cy.xpath(locatorFitur.datatestid.produk).click({force: true}).should('exist',{timeout: 2000})
        cy.wait(2000)
    }

    async klikPengguna(){
        cy.xpath(locatorFitur.datatestid.pengguna).click({force: true}).should('exist',{timeout: 2000})
        cy.wait(2000)
    }

    async klikPelanggan(){
        cy.xpath(locatorFitur.datatestid.pelanggan).click({force: true}).should('exist',{timeout: 2000})
        cy.wait(2000)
    }


    async logout() {
        cy.xpath(locatorDashboard.datatestid.klik_user_logo).click({force: true})
        cy.xpath(locatorDashboard.datatestid.klik_logout).click({force: true})
        cy.wait(5000)
        cy.clock().then((clock) => {
        clock.tick(1000)})
    }
}

module.exports = new dasboardPage()