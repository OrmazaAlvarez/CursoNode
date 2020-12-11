const fs = require('fs');
const { require } = require('yargs');

let listadoPorHacer = [];

const guardarDB = () => {
    return new Promise((resolve, reject) => {
        let data = JSON.stringify(listadoPorHacer);
        fs.writeFile(`db/data.json`, data, (err) => {
            if (err) reject(err);
            else resolve(`Tarea por hacer guardada`.green);
        });
    })
}

const cargarDB = () => {
    listadoPorHacer = require('../db/data.json');
}

const crear = (descripcion) => {
    cargarDB()
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB()
        .then(mensaje => console.log(mensaje))
        .catch(err => console.log(err));
    return porHacer;
};

module.exports = { crear }