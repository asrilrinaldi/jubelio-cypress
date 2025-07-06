describe('template spec', () => {
  it('positive_create pesanan', () => {
    cy.visit('https://v2.jubelio.com/auth/login') //go to url

    cy.login('asril.rinaldi@gmail.com', 'Ald!082030'); //login
  
    cy.get('.shared1').should('contain', 'Selamat Datang'); //validate header
     
    cy.contains('span', 'Penjualan').click();

    cy.get('.MuiGrid-container > [href="/sales/transactions"]').should('be.visible');
    cy.get('.MuiGrid-container > [href="/sales/transactions"]').click();

    cy.contains('h4', 'Transaksi Penjualan').should('contain', 'Transaksi Penjualan'); //validate header

    cy.get('[style="position: absolute; right: 35px; top: 60px; z-index: 99999; width: 400px; background: rgb(255, 255, 255); height: calc(100% - 130px);"] > .MuiButton-root').click();
    

    cy.edit_pesanan('TAS000000000006','BLIBLI');
    

    

    // cy.logout(); //logout
    

    
  })
})