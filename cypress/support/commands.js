// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://v2.jubelio.com/auth/login');
  cy.get('#textfield-email').type(email);
  cy.get('#textfield-password').type(password);
  cy.get('.MuiButton-root').click();
});



Cypress.Commands.add('logout', () => {
    cy.get('.cursor-pointer').click();
    cy.get('.mt-2 > .text-danger').click();
});

Cypress.Commands.add('create_pesanan', (nomor_pesanan, pelanggan, sumber, lokasi, produk) => {
    cy.contains('span', 'Penjualan').click();

    cy.get('.MuiGrid-container > [href="/sales/transactions"]').should('be.visible');
    cy.get('.MuiGrid-container > [href="/sales/transactions"]').click();

    cy.contains('h4', 'Transaksi Penjualan').should('contain', 'Transaksi Penjualan'); //validate header

    cy.get('[style="position: absolute; right: 35px; top: 60px; z-index: 99999; width: 400px; background: rgb(255, 255, 255); height: calc(100% - 130px);"] > .MuiButton-root').click();
    cy.get('button').contains('Tambah Baru').click();
    

    cy.contains('h4', 'Tambah Pesanan').should('contain', 'Tambah Pesanan'); //validate header //validate header

    cy.get('input[placeholder="Pilih pelanggan"]').should('be.visible');


    // const nomor_pesanan = 'GAMIS00000002';
    
    cy.get('input[name="salesorder_no"]').clear();
    cy.get('input[name="salesorder_no"]').type(nomor_pesanan);

    cy.get('input[placeholder="Pilih pelanggan"]').type(pelanggan);
    cy.wait(1000); // tunggu 1 detik
    cy.get('input[placeholder="Pilih pelanggan"]').type('{downarrow}{enter}');

    cy.get('input[placeholder="Pilih sumber"]').type(sumber);
    cy.wait(1000); // tunggu 1 detik
    cy.get('input[placeholder="Pilih sumber"]').type('{downarrow}{enter}');

    cy.get('input[placeholder="Pilih lokasi"]').type(lokasi);
    cy.wait(1000); // tunggu 1 detik
    cy.get('input[placeholder="Pilih lokasi"]').type('{downarrow}{enter}');

    cy.get('button').contains('Tambah Baru').click();
    cy.wait(1000);
    cy.get('div.tippy-box input').type(produk);
    cy.wait(1000); // tunggu 1 detik
    cy.get('div.tippy-box input').type('{downarrow}{enter}');


    cy.get('button').contains('Simpan').click();

    cy.contains('h4', 'Transaksi Penjualan').should('contain', 'Transaksi Penjualan');
});

Cypress.Commands.add('edit_pesanan', (nomor_pesanan, ubah_pelanggan) => {
    //edit pesanan
    cy.contains('span', nomor_pesanan).click();
    cy.get('button').contains('Edit').should('be.visible');
    cy.get('button').contains('Edit').click();
    
    cy.get('input[placeholder="Pilih pelanggan"]').clear();
    cy.get('input[placeholder="Pilih pelanggan"]').click();
    cy.wait(1000); // tunggu 1 detik
    cy.get('input[placeholder="Pilih pelanggan"]').type(ubah_pelanggan);
    cy.wait(1000); // tunggu 1 detik
    cy.get('input[placeholder="Pilih pelanggan"]').type('{downarrow}{enter}');
    cy.wait(1000); // tunggu 1 detik
    cy.get('button').contains('Simpan').click();

    cy.contains('h4', 'Transaksi Penjualan').should('contain', 'Transaksi Penjualan');

    
    // cy.get('.nama-pelanggan').invoke('text').as('namaPelanggan');

    // cy.get('@namaPelanggan').then((namaPelanggan) => {
    // expect(namaPelanggan.trim()).to.equal(ubah_pelanggan);
    // });
});

Cypress.Commands.add('search_pesanan', (nomor_pesanan) => {
    
    cy.get('input[placeholder="Cari pesanan"]').type(nomor_pesanan);
    cy.get('button').contains('Terapkan').click();

    cy.get('tr:nth-of-type(1) span.font-weight-lightbold').should('be.visible');

    cy.get('tr:nth-of-type(1) span.font-weight-lightbold').invoke('text').as('namaPelanggan');

    cy.get('@namaPelanggan').then((namaPelanggan) => {
    expect(namaPelanggan.trim()).to.equal(nomor_pesanan);
    });
});