const LoginPage = require('../support/Page/login-page')
const productspage = require('../support/Page/produk-page')
const DasboardPage = require('../support/Page/dashbord-page')

describe('Test produk', () => {
  
  beforeEach('login dulu', ()=>{
    LoginPage.urlLogin()
    LoginPage.fillEmail()
    LoginPage.fillPassword()
    LoginPage.clickLoginButton()
    })
     
  // tambah
  it('add new produk', () => {
    productspage.addProduk()
  })

//   //tambah tanpa deskripsi
  it('add tanpa deskripsi', () => {
    productspage.addtanpadeskripsi()
  })

  // Ubah
  it('ubah kategori', () => {
    productspage.ubahProduk()
  })

//   // hapus
  it('delete kategori',()=>{
    productspage.hapusProduk()
  })
})