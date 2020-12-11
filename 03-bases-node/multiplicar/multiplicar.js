const fs = require('fs');
const { resolve } = require('path');
//const fs = require('express');
//const fs = require('./fs');
let tabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (Number(base)) {
            let data = '';
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
                else resolve(`tabla-${base}-all-${limite}.txt`);
            });
        }).catch(err => reject(err));
    });
};
module.exports = { crearArchivo, listar };