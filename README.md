# Jubelio Cypress Automation Test

Repositori ini berisi automation test menggunakan [Cypress](https://www.cypress.io/) untuk modul aplikasi Jubelio, meliputi:

## 📁 Fitur yang Diuji


### 1. Modul Penjualan
- Create Pesanan
- Edit Pesanan
- Search Pesanan

---

## 🚀 Cara Menjalankan Project

### Persyaratan:
- Node.js & npm terinstal
- OS: Windows/Linux/Mac

### Langkah Instalasi:

```bash
git clone https://github.com/asrilrinaldi/jubelio-cypress.git
cd jubelio-cypress
npm install
npx cypress open
or
npx cypress run --browser chrome --headed

npx cypress run --spec "cypress/e2e/positive_login.cy.js" --browser chrome --headed

```

### Menjalankan di Headless Mode:

```bash
npx cypress run
```

---

## 📂 Struktur Folder

```
jubelio-cypress/
├── cypress/
│   ├── e2e/
│   │   ├── positive_create_pesanan.cy.js
│   │   ├── positive_edit_pesanan.cy.js
│   │   ├── positive_search_pesanan.cy.js
│   │   └── positive_login.cy.js
│   ├── fixtures/
│   └── support/
├── cypress.config.js
└── package.json
```

---

## 🐞 Bug Report

Bug report dapat dilihat di file `BUG_REPORT.md` atau melalui [Issues](https://github.com/asrilrinaldi/jubelio-cypress/issues).

---

## ✍️ Kontributor

- Asril Rinaldi

---


