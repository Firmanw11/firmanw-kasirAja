const LoginPage = require('../support/Page/login-page')
const pembelianPage = require('../support/Page/pembelian-page')
const dashbordPage = require ('../support/Page/dashbord-page')

describe('Test pelanggan', () => {
  
  beforeEach('login dulu', ()=>{
    LoginPage.urlLogin()
    LoginPage.fillEmail()
    LoginPage.fillPassword()
    LoginPage.clickLoginButton()
    })
    
  
  it('new pembelian', () => {
    pembelianPage.tambahPembelian()
    
  })

})