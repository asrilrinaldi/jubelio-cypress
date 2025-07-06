describe('template spec', () => {
  it('positive_create pesanan', () => {
    cy.visit('https://v2.jubelio.com/auth/login') //go to url

    cy.login('asril.rinaldi@gmail.com', 'Ald!082030'); //login
  
    cy.get('.shared1').should('contain', 'Selamat Datang'); //validate header

    cy.create_pesanan('TAS000000000006','BLANJA','LAZADA','PUSAT','TAS');

    cy.edit_pesanan('TAS000000000006','BLIBLI');
    

    

    // cy.logout(); //logout
    

    
  })
})