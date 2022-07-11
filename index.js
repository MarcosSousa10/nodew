//index.js
const db = require("./db");

(async() => {
    const db = require("./db");
    console.log('Começou!');


    const clientes = await db.selectCustomers();
    console.log(clientes);
})();