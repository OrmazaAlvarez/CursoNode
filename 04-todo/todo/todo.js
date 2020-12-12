const fs = require('fs');

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
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const crear = (descripcion, completado) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado
    };
    listadoPorHacer.push(porHacer);
    guardarDB()
        .then(mensaje => console.log(mensaje))
        .catch(err => console.log(err));
    return porHacer;
};

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    /* **** Como lo hice solo :) *****
    let listaux = [];
    let eliminado = false
    listadoPorHacer.forEach(element => {
        if (element.descripcion != descripcion) {
            listaux.push(element);
        } else {
            eliminado = true;
        }
    });
    if (eliminado) {
        listadoPorHacer = listaux;
        guardarDB();
    }
    return eliminado; */
    let listaux = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });
    if (listadoPorHacer.length !== listaux.length) {
        listadoPorHacer = listaux;
        guardarDB();
        return true
    }
    return false
};

module.exports = { crear, actualizar, borrar, getListado }