const LoginPage = require('../support/Page/login-page')
const pelangganPage = require('../support/Page/pelanggan-page')
const dashbordPage = require ('../support/Page/dashbord-page')

describe('Test pelanggan', () => {
  
  before('login dulu', ()=>{
    LoginPage.urlLogin()
    LoginPage.fillEmail()
    LoginPage.fillPassword()
    LoginPage.clickLoginButton()
    })
    
  
  it('add new pelanggan', () => {
    pelangganPage.addPelanggan()
    
  })

  it('Ubah Pelanggan', () =>{
    pelangganPage.ubahPelanggan()

  })

  it('Hapus Pelanggan', () => {
    pelangganPage.hapusPelanggan()
  })

})