describe('template spec', () => {
  it('positive_create pesanan', () => {
    cy.visit('https://v2.jubelio.com/auth/login') //go to url

    cy.login('asril.rinaldi@gmail.com', 'Ald!082030'); //login
  
    cy.get('.shared1').should('contain', 'Selamat Datang'); //validate header

    cy.create_pesanan('PRODUK000000000008','BLANJA','LAZADA','PUSAT','SEPATU'); //create pesanan

    cy.edit_pesanan('PRODUK000000000008','BLIBLI'); //edit pesanan

    cy.logout(); //logout
    

    
  })
})