const fs = require('fs');
//const fs = require('express');
//const fs = require('./fs');

let crearArchivo = (base) => {
    return new Promise((reslve, reject) => {
        if (Number(base)) {
            let data = '';
            for (let c = 1; c < 11; c++) {
                data += `${base}*${c}=${base*c}\n`;
            }

            fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
                if (err) reject(err);
                else reslve(`tabla-${base}.txt`);
            });
        } else {
            reject(`El valor introducido ${base} no es un número`);
        }
    });
};
module.exports = { crearArchivo };