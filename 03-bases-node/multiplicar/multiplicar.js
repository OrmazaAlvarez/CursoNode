const fs = require('fs');
const colors = require('colors');
//const fs = require('express');
//const fs = require('./fs');
let tabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (Number(base)) {
            let data = '==================\n'.green;
            data += `== Tabla del ${base} ==\n`.green;
            data += '==================\n'.green;
            for (let c = 1; c <= limite; c++) {
                data += `${base}*${c}=${base*c}\n`;
            }
            resolve(data)
        } else {
            reject(`El valor introducido ${base} no es un número`);
        }
    });
};

let listar = (base, limite) => {
    return new Promise((resolve, reject) =>
        tabla(base, limite)
        .then(data => resolve(data))
        .catch(err => reject(err)));
};

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        tabla(base, limite).then(data => {
            fs.writeFile(`tablas/tabla-${base}-all-${limite}.txt`, data, (err) => {
                if (err) reject(err);
                else resolve(`Archivo creado: ` + `tabla-${base}-all-${limite}.txt`.green);
            });
        }).catch(err => reject(err));
    });
};
module.exports = { crearArchivo, listar };