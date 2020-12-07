const fs = require('fs');
//const fs = require('express');
//const fs = require('./fs');

let base = 2;
let data = '';
for (let c = 1; c < 11; c++) {
    data += `${base}*${c}=${base*c}\n`;
}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base}.txt ha sido creado`);
});