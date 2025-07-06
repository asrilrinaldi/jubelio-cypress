describe('template spec', () => {
  it('positive_login', () => {
    cy.visit('https://v2.jubelio.com/auth/login')

    cy.login('asril.rinaldi@gmail.com', 'Ald!082030');
  
    cy.get('.shared1').should('contain', 'Selamat Datang');

    cy.logout(); //logout
  })
})