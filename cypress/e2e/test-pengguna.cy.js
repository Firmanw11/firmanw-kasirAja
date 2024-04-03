const LoginPage = require('../support/Page/login-page')
const penggunaPage = require('../support/Page/pengguna-page')
const dashbordPage = require ('../support/Page/dashbord-page')

describe('Test pelanggan', () => {
  
  beforeEach('login dulu', ()=>{
    LoginPage.urlLogin()
    LoginPage.fillEmail()
    LoginPage.fillPassword()
    LoginPage.clickLoginButton()
    })
    
  
  it('add new pelanggan', () => {
    penggunaPage.addPengguna()
    
  })

  it('ubah pelanggan', () => {
    penggunaPage.ubahPengguna()
    
  })

  it('hapus pelanggan', () => {
    penggunaPage.hapusPengguna()
    
  })

})