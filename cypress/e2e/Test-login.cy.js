const LoginPage = require('../support/Page/login-page')
const registerPage = require('../support/Page/Register-page')
const kategoripage = require('../support/Page/kategori-page')

describe('User should be able to sign up', () => {
  it('Verify user login with registered credentials Email and Password', () => {

    registerPage.urlRegister()
    registerPage.fillNamaToko()
    registerPage.fillEmail()
    registerPage.fillPassword()
    registerPage.clickSignUpBtn()

    LoginPage.urlLogin()
    LoginPage.fillEmail()
    LoginPage.fillPassword()
    LoginPage.clickLoginButton()

    // kategoripage.AddKategori()


  })
})