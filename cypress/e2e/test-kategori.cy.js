const LoginPage = require('../support/Page/login-page')
const kategoripage = require('../support/Page/kategori-page')
const DasboardPage = require('../support/Page/dashbord-page')
const dashbordPage = require('../support/Page/dashbord-page')

describe('Test Kategori', () => {
  
  beforeEach('login dulu', ()=>{
    LoginPage.urlLogin()
    LoginPage.fillEmail()
    LoginPage.fillPassword()
    LoginPage.clickLoginButton()
    })
    
  it('add new kategori', () => {
    kategoripage.AddKategori()
  })

  it('add tanpa deskripsi', () => {
    kategoripage.addtanpadeskripsi()
  })

  it('ubah kategori', () => {
    kategoripage.ubahkategori()
  })

  it('delete kategori',()=>{
    DasboardPage.klikKategori()
    kategoripage.deletekategori()
    DasboardPage.logout()
  })
})